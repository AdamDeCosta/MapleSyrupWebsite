import React from "react"
import Section from "../Section"
import colors from "../../utils/colors"
import TableauReport from "tableau-react-embed"

const PPT: React.FC = () => (
  <>
    <Section style={{ backgroundColor: colors.white }}>
      <>
        <h2>Change in Production Per Tap over the last decade</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in ante
          gravida, efficitur est ac, semper magna. Sed porttitor leo neque, eget
          imperdiet orci vestibulum sit amet. Sed eu dolor nisl. Pellentesque
          vitae ipsum sollicitudin, semper velit vitae, scelerisque arcu. Donec
          eget arcu at magna ultrices aliquam in id diam. Quisque convallis arcu
          vitae neque laoreet malesuada at at metus. Etiam eu enim erat.
          Suspendisse potenti. Maecenas id tortor viverra erat tristique
          sagittis. Integer tristique ornare lectus, eget eleifend risus cursus
          ut. Nullam nibh metus, pellentesque non vulputate dictum, interdum
          quis magna.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in ante
          gravida, efficitur est ac, semper magna. Sed porttitor leo neque, eget
          imperdiet orci vestibulum sit amet. Sed eu dolor nisl. Pellentesque
          vitae ipsum sollicitudin, semper velit vitae, scelerisque arcu. Donec
          eget arcu at magna ultrices aliquam in id diam. Quisque convallis arcu
          vitae neque laoreet malesuada at at metus. Etiam eu enim erat.
          Suspendisse potenti. Maecenas id tortor viverra erat tristique
          sagittis. Integer tristique ornare lectus, eget eleifend risus cursus
          ut. Nullam nibh metus, pellentesque non vulputate dictum, interdum
          quis magna.
        </p>
        <TableauReport
          options={{ height: 768, width: 1024 }}
          url="https://public.tableau.com/views/MapleSyrupAnalysisMergedData/Sheet1?:retry=yes&:jsdebug=y&:comments=no&:refresh=yes&:display_count=y&:origin=viz_share_link"
        />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in ante
          gravida, efficitur est ac, semper magna. Sed porttitor leo neque, eget
          imperdiet orci vestibulum sit amet. Sed eu dolor nisl. Pellentesque
          vitae ipsum sollicitudin, semper velit vitae, scelerisque arcu. Donec
          eget arcu at magna ultrices aliquam in id diam. Quisque convallis arcu
          vitae neque laoreet malesuada at at metus. Etiam eu enim erat.
          Suspendisse potenti. Maecenas id tortor viverra erat tristique
          sagittis. Integer tristique ornare lectus, eget eleifend risus cursus
          ut. Nullam nibh metus, pellentesque non vulputate dictum, interdum
          quis magna.</p>
      </>
      <TableauReport
        options={{ height: 768, width: 1024 }} 
        url="https://public.tableau.com/views/MapleSyrupVisualizationState/Sheet1?:display_count=y&publish=yes&:origin=viz_share_link"
      />
    </Section>
  </>
)

export default PPT
