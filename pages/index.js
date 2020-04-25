import Head from "next/head";
import { useEffect, useState } from "react";
import Layout from "../src/components/Layout";
import Section from "../src/components/Section";
import colors from "../src/utils/colors";
import Container from "@material-ui/core/Container";

// Needed to make sure font styles load
import "../src/utils/typography";

import dynamic from "next/dynamic";
const TableauReport = dynamic(() => import("tableau-react-embed"), {
  ssr: false,
});
import useWindowSize from "../src/utils/useWindowSize";
import styles from "./index.module.css";

const Home = () => {
  const { width } = useWindowSize();

  const handleResize = () => {
    return width >= 1024 ? width / 2 : width - 50;
  };

  const [dataWidth, setDataWidth] = useState(handleResize());

  useEffect(() => {
    setDataWidth(handleResize());
  }, [width]);
  return (
    <Layout>
      <Head>
        <title>State of the Sap</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Martel:wght@700&family=Source+Sans+Pro:ital@0;1&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <header>
        <Section className={styles.introduction}>
          <h1 style={{ color: colors.white }}>State of the Sap</h1>
          <h4 style={{ color: colors.white }}>
            An analysis of the impacts of climate change on maple syrup
            production in Vermont
          </h4>

          <p style={{ color: colors.white }}>
            With climate change’s potential to destabilize environments
            globally, cultural signifiers tied closely to their environment may
            change or disappear totally. State of the Sap attempts to link
            climate factors with Vermont’s maple syrup production to provide
            insight into production trends.
          </p>
        </Section>
      </header>
      <main>
        <Section>
          <h2>County production from 2007 - 2017</h2>
          <p>
            The figure below shows the changes in production per tap across
            individual counties across three different years, with a five-year
            period separating each one. Unfortunately, due to limitations in the
            county data (only being available every five years), these three
            years are the only ones available for comparison. Notably, Franklin
            county and Addison county are the most efficient counties regarding
            production per tap.
          </p>
          <TableauReport
            options={{ height: 768, width: dataWidth }}
            url="https://public.tableau.com/views/MapleSyrupAnalysisMergedData/Sheet1?:retry=yes&:jsdebug=y&:comments=no&:refresh=yes&:display_count=y&:origin=viz_share_link"
          />
        </Section>
        <Section>
          <h2>Statewide production from 2001 - 2018</h2>
          <p>
            The line graph below shows Vermont’s statewide average production
            per tap from 2000 to 2019. While it didn’t always increase year
            after year, the trend line clearly moves in a positive direction. An
            interesting date to note is 2012, where production per tap and
            almost every other metric sharply drops across the board.
          </p>
          <TableauReport
            options={{ height: 768, width: dataWidth }}
            url="https://public.tableau.com/views/MapleSyrupVisualizationState/Sheet1?:display_count=y&publish=yes&:origin=viz_share_link"
          />
          <p>
            According to a report put out by the USDA’s New England Agricultural
            Statistics (Keough, 2012), “[the] season ended abruptly with two
            weeks of 60+ degree temperatures. The hot week in March ended our
            season. Sap flow after that was good but syrup produced from it was
            unmarketable.” A single week of high temperatures signalled an end
            to that year’s sugaring season, and many sugarmakers had their
            season hauls significantly cut in half.
          </p>
        </Section>
        <Section>
          <h2>Clustering, and what we learned from it</h2>
          <p>
            The chart below showcases the results of applying the KMeans
            clustering algorithm on the dataset. The results are interesting:
            the clusters are relatively distinct, and the data clustered well
            enough. Cluster 0 has 7 data points, Cluster 1 has 2, Cluster 2 has
            32, Cluster 3 has 11, and Cluster 4 has 18.
          </p>
          <img src="/clusters.svg" />
          <p>
            The table below shows the average values of the five maple
            syrup-related features in the dataset. Clusters 0 and 1 contain most
            of the “outliers” of the dataset. Cluster 0 contains 7 data points,
            the majority of which are from 1997 and 2002, and data from only two
            counties: Essex and Grand Isle. Cluster 1 contains two data points
            that are in Grand Isle, a Vermont county not known for its maple
            syrup farms. The highest value cluster is Cluster 4, with values
            significantly higher than the rest of the clusters, especially in
            Production and Sales. Clusters 2 and 3 seem to have similar values
            across the board, except for Operations with Taps.
          </p>
          <div style={{ display: "flex", overflow: "auto", maxWidth: dataWidth }}>
            <img
              style={{ minHeight: 110, minWidth: 840 }}
              src="/cluster_desc.png"
            />
          </div>
        </Section>
        <Section>
          <h2>Correlation</h2>
          <p>
            In an attempt to discover which features affected the clustering the
            most, the authors decided to examine which features were more
            correlated with the cluster label. The Correlation Matrix
            describes how correlated each feature is with eachother. As
            expected, all of the maple syrup features are correlated to each
            other, and are also positively correlated to the cluster label.
            However, there are some interesting ideas to explore regarding
            correlation between the environmental factors and the clusters.
          </p>
          <TableauReport
            options={{ height: 768, width: dataWidth }}
            url="https://public.tableau.com/views/TheStateoftheSapCorrelation/CorrelationMatrix?:display_count=y&publish=yes&:origin=viz_share_link"
          />
          <p>
            Understanding how the data is clustered is important for exploring
            the connections in the clusters identified. The chart below displays
            an attempt to identify outliers/values that are significantly
            correlated with the resulting cluster label. The main contributors
            to the final label appear to mostly be the maple syrup production
            data, however there are key contributors from environmental data.
          </p>
          <TableauReport
            options={{ height: 768, width: dataWidth }}
            url="https://public.tableau.com/views/TheStateoftheSapCorrelation/CorrelationCoefficientsreal?:display_count=y&publish=yes&:origin=viz_share_link"
          />
          <p>
            In terms of positive correlation in environmental data, Average
            Annual Temperature, {"Temp of Last Freeze <= 20 F (Aug - Dec)"}, and
            Average Annual Minimum Temperature are some of the most important
            features. For negative correlation, Average Annual Maximum
            Temperature, {"Temp of Last Freeze <= 16 F (Jan - July)"}, and
            Heating Degree Days seem to be the most important.
          </p>
          <p>
            What this should say is that counties with higher maple syrup
            production, should also have a high relationship with moderate
            climate factors. Moderate in this case, being less extreme highs and
            lows in terms of temperatures. This lines up with the expectations
            the authors had according to research.
          </p>
        </Section>
      </main>
    </Layout>
  );
};

export default Home;
