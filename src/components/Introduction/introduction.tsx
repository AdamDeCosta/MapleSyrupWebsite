import React from "react"
import Section from "../Section"
import colors from "../../utils/colors"

const Introduction: React.FC = () => {
  return (
    <>
      <Section
        style={{
          backgroundColor: colors.teracotta,
        }}
      >
        <>
            <h1 style={{ color: colors.white }}>State of the Sap</h1>
            <h6 style={{ color: colors.white }}>
              An analysis of the impacts of climate change on maple syrup
              production in Vermont
            </h6>

            <p style={{ color: colors.white }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in
              ante gravida, efficitur est ac, semper magna. Sed porttitor leo
              neque, eget imperdiet orci vestibulum sit amet. Sed eu dolor nisl.
              Pellentesque vitae ipsum sollicitudin, semper velit vitae,
              scelerisque arcu. Donec eget arcu at magna ultrices aliquam in id
              diam. Quisque convallis arcu vitae neque laoreet malesuada at at
              metus. Etiam eu enim erat. Suspendisse potenti. Maecenas id tortor
              viverra erat tristique sagittis. Integer tristique ornare lectus,
              eget eleifend risus cursus ut. Nullam nibh metus, pellentesque non
              vulputate dictum, interdum quis magna.
            </p>
          </>
      </Section>
    </>
  )
}

export default Introduction
