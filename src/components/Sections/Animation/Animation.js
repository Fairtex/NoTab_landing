import React, { useRef, useMemo } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { motion, useTransform, useViewportScroll } from "framer-motion"
import { useRefScrollProgress, useRect } from "../../../hooks"

const Animation = ({ content }) => {
  const refRow = useRef()
  const refContainer = useRef()
  const { scrollYProgress } = useViewportScroll()
  const { start: s, end: e } = useRefScrollProgress(refRow)
  const rectContainer = useRect(refContainer)

  const start = useMemo(() => s - 0.02, s)
  const end = useMemo(() => e - 0.1, e)


  console.log(s, e, start, scrollYProgress, end)

  const stepSize = useMemo(() => {
    return (end - start) / 11
  }, [start, end])

  const xPosInner = useTransform(
    scrollYProgress,
    [start, start + stepSize],
    [0, rectContainer.right - rectContainer.left - rectContainer.width / 2]
  )
  const degIphone = useTransform(
    scrollYProgress,
    [start + stepSize, start + stepSize * 2],
    [90, 0]
  )
  const opacityText = useTransform(
    scrollYProgress,
    [start + stepSize, start + stepSize * 2],
    [1, 0]
  )
  const scaleIphone = useTransform(
    scrollYProgress,
    [start + stepSize * 2, end],
    [1.2, 1]
  )

  const xPosOverlayImage1 = useTransform(
    scrollYProgress,
    [start + stepSize * 8, start + stepSize * 10],
    ["0", "105%"]
  )
  const yPosOverlayImage1 = useTransform(
    scrollYProgress,
    [start + stepSize * 8, start + stepSize * 10],
    ["0", "115%"]
  )

  const xPosOverlayImage2 = useTransform(
    scrollYProgress,
    [start + stepSize * 2, start + stepSize * 9],
    ["0", "-115%"]
  )
  const yPosOverlayImage2 = useTransform(
    scrollYProgress,
    [start + stepSize * 2, start + stepSize * 9],
    ["0", "-90%"]
  )
  const scaleOverlayImage2 = useTransform(
    scrollYProgress,
    [start + stepSize * 10, end],
    [1, 1.1]
  )

  const xPosImage1 = useTransform(
    scrollYProgress,
    [start + stepSize * 8, start + stepSize * 10],
    ["0", "-40%"]
  )
  const yPosImage1 = useTransform(
    scrollYProgress,
    [start + stepSize * 8, start + stepSize * 10],
    ["0", "205%"]
  )

  const xPosImage2 = useTransform(
    scrollYProgress,
    [start + stepSize * 4, start + stepSize * 9],
    ["0", "-130%"]
  )
  const yPosImage2 = useTransform(
    scrollYProgress,
    [start + stepSize * 4, start + stepSize * 9],
    ["0", "105%"]
  )
  const scaleImage2 = useTransform(
    scrollYProgress,
    [start + stepSize * 10, end],
    [1, 1.1]
  )

  const xPosImage3 = useTransform(
    scrollYProgress,
    [start + stepSize * 8, start + stepSize * 10],
    ["0", "-125%"]
  )
  const yPosImage3 = useTransform(
    scrollYProgress,
    [start + stepSize * 8, start + stepSize * 10],
    ["0", "77%"]
  )

  const xPosImage4 = useTransform(
    scrollYProgress,
    [start + stepSize * 4, start + stepSize * 10],
    ["0", "-195%"]
  )
  const yPosImage4 = useTransform(
    scrollYProgress,
    [start + stepSize * 4, start + stepSize * 10],
    ["0", "10%"]
  )
  const scaleImage4 = useTransform(
    scrollYProgress,
    [start + stepSize * 10, end],
    [1, 1.1]
  )

  const xPosImage5 = useTransform(
    scrollYProgress,
    [start + stepSize * 4, start + stepSize * 9],
    ["0", "136%"]
  )
  const yPosImage5 = useTransform(
    scrollYProgress,
    [start + stepSize * 4, start + stepSize * 9],
    ["0", "29%"]
  )
  const scaleImage5 = useTransform(
    scrollYProgress,
    [start + stepSize * 10, end],
    [1, 0.9]
  )

  const xPosImage6 = useTransform(
    scrollYProgress,
    [start + stepSize * 8, start + stepSize * 10],
    ["0", "289%"]
  )
  const yPosImage6 = useTransform(
    scrollYProgress,
    [start + stepSize * 8, start + stepSize * 10],
    ["0", "54%"]
  )

  const xPosImage7 = useTransform(
    scrollYProgress,
    [start + stepSize * 8, start + stepSize * 10],
    ["0", "196%"]
  )
  const yPosImage7 = useTransform(
    scrollYProgress,
    [start + stepSize * 8, start + stepSize * 10],
    ["0", "-58%"]
  )

  const xPosImage8 = useTransform(
    scrollYProgress,
    [start + stepSize * 4, start + stepSize * 9],
    ["0", "107%"]
  )
  const yPosImage8 = useTransform(
    scrollYProgress,
    [start + stepSize * 4, start + stepSize * 9],
    ["0", "-137%"]
  )
  const scaleImage8 = useTransform(
    scrollYProgress,
    [start + stepSize * 10, end],
    [1, 1.1]
  )

  const xPosImage9 = useTransform(
    scrollYProgress,
    [start + stepSize * 8, start + stepSize * 10],
    ["0", "-242%"]
  )
  const yPosImage9 = useTransform(
    scrollYProgress,
    [start + stepSize * 8, start + stepSize * 10],
    ["0", "-146%"]
  )

  const data = useStaticQuery(
    graphql`
      query {
        iphoneAnim: file(relativePath: { eq: "animation-iphone.png" }) {
          childImageSharp {
            fluid(maxWidth: 682, maxHeight: 1068, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        overlayImage1: file(
          relativePath: { eq: "animation-overlay-image1.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 445, maxHeight: 420, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        overlayImage2: file(
          relativePath: { eq: "animation-overlay-image2.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 381, maxHeight: 355, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image1: file(relativePath: { eq: "animation-image1.png" }) {
          childImageSharp {
            fluid(maxWidth: 379, maxHeight: 284, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image2: file(relativePath: { eq: "animation-image2.png" }) {
          childImageSharp {
            fluid(maxWidth: 456, maxHeight: 430, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image3: file(relativePath: { eq: "animation-image3.png" }) {
          childImageSharp {
            fluid(maxWidth: 310, maxHeight: 318, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image4: file(relativePath: { eq: "animation-image4.png" }) {
          childImageSharp {
            fluid(maxWidth: 286, maxHeight: 348, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image5: file(relativePath: { eq: "animation-image5.png" }) {
          childImageSharp {
            fluid(maxWidth: 286, maxHeight: 348, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image6: file(relativePath: { eq: "animation-image6.png" }) {
          childImageSharp {
            fluid(maxWidth: 252, maxHeight: 298, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image7: file(relativePath: { eq: "animation-image7.png" }) {
          childImageSharp {
            fluid(maxWidth: 320, maxHeight: 399, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image8: file(relativePath: { eq: "animation-image8.png" }) {
          childImageSharp {
            fluid(maxWidth: 431, maxHeight: 364, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image9: file(relativePath: { eq: "animation-image9.png" }) {
          childImageSharp {
            fluid(maxWidth: 286, maxHeight: 349, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <section className="animation">
      <div className="container">
        <div
          className="animation__inner"
          ref={refRow}
          style={{
            x: xPosInner,
          }}
        >
          <motion.div
            className="animation__row"
            ref={refRow}
            style={{
              x: xPosInner,
            }}
          >
            <div className="animation__gadget-container" ref={refContainer}>
              <motion.div
                className="animation__gadget"
                style={{
                  rotate: degIphone,
                  scale: scaleIphone,
                  transformOrigin: "center center",
                }}
              >
                <Img
                  className="animation__gadget-iphone-image"
                  fluid={data.iphoneAnim.childImageSharp.fluid}
                />

                <motion.div
                  className="animation__gadget-overlay-image-1"
                  style={{
                    x: xPosOverlayImage1,
                    y: yPosOverlayImage1,
                  }}
                >
                  <Img fluid={data.overlayImage1.childImageSharp.fluid} />
                </motion.div>

                <motion.div
                  className="animation__gadget-overlay-image-2"
                  style={{
                    x: xPosOverlayImage2,
                    y: yPosOverlayImage2,
                    scale: scaleOverlayImage2,
                  }}
                >
                  <Img fluid={data.overlayImage2.childImageSharp.fluid} />
                </motion.div>

                <motion.div
                  className="animation__gadget-image animation__gadget-image-1"
                  style={{
                    x: xPosImage1,
                    y: yPosImage1,
                  }}
                >
                  <Img fluid={data.image1.childImageSharp.fluid} />
                </motion.div>

                <motion.div
                  className="animation__gadget-image animation__gadget-image-3"
                  style={{
                    x: xPosImage2,
                    y: yPosImage2,
                    scale: scaleImage2,
                  }}
                >
                  <Img fluid={data.image2.childImageSharp.fluid} />
                </motion.div>

                <motion.div
                  className="animation__gadget-image animation__gadget-image-4"
                  style={{
                    x: xPosImage3,
                    y: yPosImage3,
                  }}
                >
                  <Img fluid={data.image3.childImageSharp.fluid} />
                </motion.div>

                <motion.div
                  className="animation__gadget-image animation__gadget-image-5"
                  style={{
                    x: xPosImage4,
                    y: yPosImage4,
                    scale: scaleImage4,
                  }}
                >
                  <Img fluid={data.image4.childImageSharp.fluid} />
                </motion.div>

                <motion.div
                  className="animation__gadget-image animation__gadget-image-6"
                  style={{
                    x: xPosImage5,
                    y: yPosImage5,
                    scale: scaleImage5,
                  }}
                >
                  <Img fluid={data.image5.childImageSharp.fluid} />
                </motion.div>

                <motion.div
                  className="animation__gadget-image animation__gadget-image-7"
                  style={{
                    x: xPosImage6,
                    y: yPosImage6,
                  }}
                >
                  <Img fluid={data.image6.childImageSharp.fluid} />
                </motion.div>

                <motion.div
                  className="animation__gadget-image animation__gadget-image-8"
                  style={{
                    x: xPosImage7,
                    y: yPosImage7,
                  }}
                >
                  <Img fluid={data.image7.childImageSharp.fluid} />
                </motion.div>

                <motion.div
                  className="animation__gadget-image animation__gadget-image-9"
                  style={{
                    x: xPosImage8,
                    y: yPosImage8,
                    scale: scaleImage8,
                  }}
                >
                  <Img fluid={data.image8.childImageSharp.fluid} />
                </motion.div>

                <motion.div
                  className="animation__gadget-image animation__gadget-image-11"
                  style={{
                    x: xPosImage9,
                    y: yPosImage9,
                  }}
                >
                  <Img fluid={data.image9.childImageSharp.fluid} />
                </motion.div>
              </motion.div>
            </div>
            <motion.div
              className="animation__info-container"
              style={{ opacity: opacityText }}
            >
              <div className="animation__info">
                <h2 className="animation__title title">
                  {content.animationBlockTitle}
                </h2>
                <p className="animation__info-text text">
                  {content.animationBlockText.animationBlockText}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Animation
