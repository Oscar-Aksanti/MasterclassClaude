"""
Dashboard DELTA Distribution — Fatou Diallo
Module 4 — Créer des solutions numériques avec Claude Code

Ce tableau de bord reprend le jeu de ventes nettoyé du Module 3 (client fil rouge
DELTA Distribution) pour donner à Fatou un lien qu'elle peut envoyer directement
à son client, plutôt qu'un fichier Excel à rouvrir chaque mois.

Version SOLUTION — corrigée et testée (voir exercice-guide-solution.md pour le
détail du bug corrigé par rapport à app-depart/app.py).
"""

import pandas as pd
import plotly.express as px
import streamlit as st

# ---------------------------------------------------------------------------
# Configuration de page et charte graphique Claude AI Mastery 2.0
# ---------------------------------------------------------------------------
st.set_page_config(
    page_title="DELTA Distribution — Tableau de bord",
    page_icon="📊",
    layout="wide",
)

COULEUR_CREME = "#FDF3F0"
COULEUR_ENCRE = "#1A1323"
COULEUR_VIOLET = "#7530AA"
COULEUR_INDIGO = "#691FD2"
COULEUR_CORAIL = "#E06840"
COULEUR_BLANC = "#FFFFFF"

st.markdown(
    f"""
    <style>
    .stApp {{
        background-color: {COULEUR_CREME};
    }}
    h1, h2, h3 {{
        color: {COULEUR_ENCRE};
    }}
    div[data-testid="stMetric"] {{
        background-color: {COULEUR_ENCRE};
        border-radius: 16px;
        padding: 14px 18px;
    }}
    div[data-testid="stMetric"] label, div[data-testid="stMetric"] div {{
        color: {COULEUR_BLANC} !important;
    }}
    .bandeau-cta {{
        background: linear-gradient(90deg, {COULEUR_VIOLET} 0%, {COULEUR_INDIGO} 100%);
        color: {COULEUR_BLANC};
        padding: 16px 24px;
        border-radius: 16px;
        margin-top: 24px;
    }}
    </style>
    """,
    unsafe_allow_html=True,
)

CHEMIN_DONNEES = "data/ventes-delta-nettoye.csv"

MOIS_FR = {
    1: "Janvier", 2: "Février", 3: "Mars", 4: "Avril", 5: "Mai", 6: "Juin",
    7: "Juillet", 8: "Août", 9: "Septembre", 10: "Octobre", 11: "Novembre", 12: "Décembre",
}


# ---------------------------------------------------------------------------
# Chargement des données
# ---------------------------------------------------------------------------
@st.cache_data
def charger_donnees(chemin: str) -> pd.DataFrame:
    df = pd.read_csv(chemin, parse_dates=["date_vente"])
    df["mois_periode"] = df["date_vente"].dt.to_period("M")
    df["mois_libelle"] = df["date_vente"].dt.month.map(MOIS_FR)
    return df


df = charger_donnees(CHEMIN_DONNEES)

# ---------------------------------------------------------------------------
# En-tête
# ---------------------------------------------------------------------------
st.title("📊 Tableau de bord — DELTA Distribution")
st.markdown(
    "Suivi mensuel des ventes préparé par **Fatou Diallo**, consultante indépendante "
    "en gestion de projets — Dakar. Données nettoyées au Module 3, visualisées ici "
    "pour être partagées par lien avec le client."
)

# ---------------------------------------------------------------------------
# Filtres (barre latérale)
# ---------------------------------------------------------------------------
st.sidebar.header("Filtres")

regions_disponibles = sorted(df["region"].unique())
regions_choisies = st.sidebar.multiselect(
    "Région", options=regions_disponibles, default=regions_disponibles
)

canaux_disponibles = sorted(df["canal_vente"].unique())
canaux_choisis = st.sidebar.multiselect(
    "Canal de vente", options=canaux_disponibles, default=canaux_disponibles
)

date_min = df["date_vente"].min().date()
date_max = df["date_vente"].max().date()
plage_dates = st.sidebar.date_input(
    "Période", value=(date_min, date_max), min_value=date_min, max_value=date_max
)

if isinstance(plage_dates, tuple) and len(plage_dates) == 2:
    debut, fin = plage_dates
else:
    debut, fin = date_min, date_max

df_filtre = df[
    (df["region"].isin(regions_choisies))
    & (df["canal_vente"].isin(canaux_choisis))
    & (df["date_vente"].dt.date >= debut)
    & (df["date_vente"].dt.date <= fin)
].copy()

if df_filtre.empty:
    st.warning("Aucune donnée pour cette combinaison de filtres. Élargissez votre sélection.")
    st.stop()

# ---------------------------------------------------------------------------
# Indicateurs clés (KPI)
# ---------------------------------------------------------------------------
chiffre_affaires_total = df_filtre["montant_total_fcfa"].sum()
quantite_totale = df_filtre["quantite"].sum()
nombre_commandes = len(df_filtre)
panier_moyen = chiffre_affaires_total / nombre_commandes if nombre_commandes else 0

col1, col2, col3, col4 = st.columns(4)
col1.metric("Chiffre d'affaires", f"{chiffre_affaires_total:,.0f} FCFA".replace(",", " "))
col2.metric("Quantité vendue", f"{quantite_totale:,.0f} unités".replace(",", " "))
col3.metric("Commandes", f"{nombre_commandes}")
col4.metric("Panier moyen", f"{panier_moyen:,.0f} FCFA".replace(",", " "))

# ---------------------------------------------------------------------------
# Alerte région Nord
# ---------------------------------------------------------------------------
ventes_par_region_mois = (
    df.groupby(["mois_periode", "region"])["montant_total_fcfa"].sum().reset_index()
)
nord = ventes_par_region_mois[ventes_par_region_mois["region"] == "Nord"].sort_values("mois_periode")
autres_regions = ventes_par_region_mois[ventes_par_region_mois["region"] != "Nord"]
moyenne_autres_par_mois = autres_regions.groupby("mois_periode")["montant_total_fcfa"].mean()

mois_alerte = []
for _, ligne in nord.iterrows():
    moyenne_autres = moyenne_autres_par_mois.get(ligne["mois_periode"], 0)
    if moyenne_autres and ligne["montant_total_fcfa"] < moyenne_autres * 0.6:
        mois_alerte.append(str(ligne["mois_periode"]))

if mois_alerte:
    st.markdown(
        f"""
        <div style="background-color:{COULEUR_ENCRE}; color:{COULEUR_BLANC};
                    border-radius:16px; padding:16px 20px; margin-bottom:16px;">
        <strong style="color:{COULEUR_CORAIL};">⚠️ Alerte région Nord</strong><br>
        Chute anormale du chiffre d'affaires détectée sur {len(mois_alerte)} mois
        ({", ".join(mois_alerte)}) — cohérent avec les 3 ruptures de stock à l'entrepôt
        Nord évoquées en réunion client (voir Module 1). Recommandation : sécuriser
        l'approvisionnement Nord avant le prochain pic de commandes.
        </div>
        """,
        unsafe_allow_html=True,
    )
else:
    st.info("Aucune anomalie détectée sur la région Nord pour la période filtrée.")

# ---------------------------------------------------------------------------
# Graphique 1 — Ventes mensuelles par région
# ---------------------------------------------------------------------------
st.subheader("Ventes mensuelles par région")

evolution_regionale = (
    df_filtre.groupby(["mois_periode", "region"])["montant_total_fcfa"]
    .sum()
    .reset_index()
)
evolution_regionale["mois_periode"] = evolution_regionale["mois_periode"].astype(str)

fig_regions = px.line(
    evolution_regionale,
    x="mois_periode",
    y="montant_total_fcfa",
    color="region",
    markers=True,
    labels={"mois_periode": "Mois", "montant_total_fcfa": "Chiffre d'affaires (FCFA)", "region": "Région"},
    color_discrete_sequence=[COULEUR_VIOLET, COULEUR_CORAIL, COULEUR_INDIGO, "#B98BD9", "#8A5A3B"],
)
fig_regions.update_layout(plot_bgcolor=COULEUR_BLANC, paper_bgcolor=COULEUR_BLANC)
st.plotly_chart(fig_regions, use_container_width=True)

# ---------------------------------------------------------------------------
# Graphique 2 — Répartition par canal de vente
# ---------------------------------------------------------------------------
col_gauche, col_droite = st.columns(2)

with col_gauche:
    st.subheader("Répartition par canal de vente")
    repartition_canal = df_filtre.groupby("canal_vente")["montant_total_fcfa"].sum().reset_index()
    fig_canal = px.pie(
        repartition_canal,
        names="canal_vente",
        values="montant_total_fcfa",
        color="canal_vente",
        color_discrete_map={
            "Grossiste": COULEUR_VIOLET,
            "Détail": COULEUR_INDIGO,
            "E-commerce": COULEUR_CORAIL,
        },
        hole=0.45,
    )
    fig_canal.update_layout(paper_bgcolor=COULEUR_BLANC)
    st.plotly_chart(fig_canal, use_container_width=True)

with col_droite:
    st.subheader("Croissance de l'E-commerce (part du volume)")
    volume_canal_mois = (
        df.groupby(["mois_periode", "canal_vente"])["quantite"].sum().reset_index()
    )
    volume_total_mois = df.groupby("mois_periode")["quantite"].sum()
    ecommerce_mois = volume_canal_mois[volume_canal_mois["canal_vente"] == "E-commerce"].copy()
    ecommerce_mois["part_pct"] = ecommerce_mois.apply(
        lambda ligne: 100 * ligne["quantite"] / volume_total_mois[ligne["mois_periode"]], axis=1
    )
    ecommerce_mois["mois_periode"] = ecommerce_mois["mois_periode"].astype(str)

    fig_ecommerce = px.bar(
        ecommerce_mois,
        x="mois_periode",
        y="part_pct",
        labels={"mois_periode": "Mois", "part_pct": "Part du volume (%)"},
        color_discrete_sequence=[COULEUR_CORAIL],
    )
    fig_ecommerce.update_layout(plot_bgcolor=COULEUR_BLANC, paper_bgcolor=COULEUR_BLANC)
    st.plotly_chart(fig_ecommerce, use_container_width=True)
    st.caption(
        "Opportunité identifiée au Module 3 : l'E-commerce reste minoritaire en valeur "
        "mais progresse rapidement en volume — recommandation d'y allouer davantage de stock/budget."
    )

# ---------------------------------------------------------------------------
# Détail des données filtrées
# ---------------------------------------------------------------------------
with st.expander("Voir le détail des transactions filtrées"):
    st.dataframe(
        df_filtre[
            [
                "date_vente", "region", "canal_vente", "categorie_produit",
                "produit", "quantite", "prix_unitaire_fcfa", "montant_total_fcfa", "commercial",
            ]
        ].sort_values("date_vente", ascending=False),
        use_container_width=True,
    )

# ---------------------------------------------------------------------------
# Bandeau de bas de page
# ---------------------------------------------------------------------------
st.markdown(
    """
    <div class="bandeau-cta">
    Ce dashboard a été construit en langage naturel avec Claude Code — aucune ligne
    de code écrite à la main par Fatou. Prochaine étape : déployez le vôtre sur
    Streamlit Community Cloud pour repartir avec un lien fonctionnel.
    </div>
    """,
    unsafe_allow_html=True,
)
