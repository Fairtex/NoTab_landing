import React, { useRef, useMemo } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { motion, useTransform, useViewportScroll } from "framer-motion"
// import { useRefScrollProgress, useRect } from "../../../hooks"

const Animation = ({ content }) => {
  const refGadget = useRef()
  const refContainer = useRef()
  // const { scrollYProgress } = useViewportScroll()
  // const { start: s, end: e } = useRefScrollProgress(refContainer)
  // const rectContainer = useRect(refGadget)

  // const start = useMemo(() => s - 0.04, [s])
  // const end = useMemo(() => e - 0.09, [e])

  // const stepSize = useMemo(() => {
  //   return (end - start) / 11
  // }, [start, end])

  // const xPosRow = useTransform(
  //   scrollYProgress,
  //   [start, start + stepSize * 2],
  //   [0, (rectContainer.right - rectContainer.left) / 2]
  // )
  // const degIphone = useTransform(
  //   scrollYProgress,
  //   [start + stepSize * 2, start + stepSize * 3],
  //   [90, 0]
  // )
  // const opacityText = useTransform(
  //   scrollYProgress,
  //   [start + stepSize * 2, start + stepSize * 3],
  //   [1, 0]
  // )
  // const scaleIphone = useTransform(
  //   scrollYProgress,
  //   [start + stepSize * 4, end],
  //   [1.27, 1]
  // )

  // const xPosOverlayImage1 = useTransform(
  //   scrollYProgress,
  //   [start + stepSize * 8, start + stepSize * 10],
  //   ["0", "105%"]
  // )
  // const yPosOverlayImage1 = useTransform(
  //   scrollYProgress,
  //   [start + stepSize * 8, start + stepSize * 10],
  //   ["0", "115%"]
  // )

  // const xPosOverlayImage2 = useTransform(
  //   scrollYProgress,
  //   [start + stepSize * 2, start + stepSize * 9],
  //   ["0", "-115%"]
  // )
  // const yPosOverlayImage2 = useTransform(
  //   scrollYProgress,
  //   [start + stepSize * 2, start + stepSize * 9],
  //   ["0", "-90%"]
  // )
  // const scaleOverlayImage2 = useTransform(
  //   scrollYProgress,
  //   [start + stepSize * 10, end],
  //   [1, 1.1]
  // )

  // const xPosImage1 = useTransform(
  //   scrollYProgress,
  //   [start + stepSize * 8, start + stepSize * 10],
  //   ["0", "-40%"]
  // )
  // const yPosImage1 = useTransform(
  //   scrollYProgress,
  //   [start + stepSize * 8, start + stepSize * 10],
  //   ["0", "205%"]
  // )

  // const xPosImage2 = useTransform(
  //   scrollYProgress,
  //   [start + stepSize * 4, start + stepSize * 9],
  //   ["0", "-130%"]
  // )
  // const yPosImage2 = useTransform(
  //   scrollYProgress,
  //   [start + stepSize * 4, start + stepSize * 9],
  //   ["0", "105%"]
  // )
  // const scaleImage2 = useTransform(
  //   scrollYProgress,
  //   [start + stepSize * 10, end],
  //   [1, 1.1]
  // )

  // const xPosImage3 = useTransform(
  //   scrollYProgress,
  //   [start + stepSize * 8, start + stepSize * 10],
  //   ["0", "-125%"]
  // )
  // const yPosImage3 = useTransform(
  //   scrollYProgress,
  //   [start + stepSize * 8, start + stepSize * 10],
  //   ["0", "77%"]
  // )

  // const xPosImage4 = useTransform(
  //   scrollYProgress,
  //   [start + stepSize * 4, start + stepSize * 10],
  //   ["0", "-195%"]
  // )
  // const yPosImage4 = useTransform(
  //   scrollYProgress,
  //   [start + stepSize * 4, start + stepSize * 10],
  //   ["0", "10%"]
  // )
  // const scaleImage4 = useTransform(
  //   scrollYProgress,
  //   [start + stepSize * 10, end],
  //   [1, 1.1]
  // )

  // const xPosImage5 = useTransform(
  //   scrollYProgress,
  //   [start + stepSize * 4, start + stepSize * 9],
  //   ["0", "136%"]
  // )
  // const yPosImage5 = useTransform(
  //   scrollYProgress,
  //   [start + stepSize * 4, start + stepSize * 9],
  //   ["0", "29%"]
  // )
  // const scaleImage5 = useTransform(
  //   scrollYProgress,
  //   [start + stepSize * 10, end],
  //   [1, 0.9]
  // )

  // const xPosImage6 = useTransform(
  //   scrollYProgress,
  //   [start + stepSize * 8, start + stepSize * 10],
  //   ["0", "289%"]
  // )
  // const yPosImage6 = useTransform(
  //   scrollYProgress,
  //   [start + stepSize * 8, start + stepSize * 10],
  //   ["0", "54%"]
  // )

  // const xPosImage7 = useTransform(
  //   scrollYProgress,
  //   [start + stepSize * 8, start + stepSize * 10],
  //   ["0", "196%"]
  // )
  // const yPosImage7 = useTransform(
  //   scrollYProgress,
  //   [start + stepSize * 8, start + stepSize * 10],
  //   ["0", "-58%"]
  // )

  // const xPosImage8 = useTransform(
  //   scrollYProgress,
  //   [start + stepSize * 4, start + stepSize * 9],
  //   ["0", "107%"]
  // )
  // const yPosImage8 = useTransform(
  //   scrollYProgress,
  //   [start + stepSize * 4, start + stepSize * 9],
  //   ["0", "-137%"]
  // )
  // const scaleImage8 = useTransform(
  //   scrollYProgress,
  //   [start + stepSize * 10, end],
  //   [1, 1.1]
  // )

  // const xPosImage9 = useTransform(
  //   scrollYProgress,
  //   [start + stepSize * 8, start + stepSize * 10],
  //   ["0", "-242%"]
  // )
  // const yPosImage9 = useTransform(
  //   scrollYProgress,
  //   [start + stepSize * 8, start + stepSize * 10],
  //   ["0", "-146%"]
  // )

  return (
    <section className="animation">
      <div className="container" ref={refContainer}>
        <div className="animation__inner">
          <motion.div
            className="animation__row"
            // style={{
            //   x: xPosRow,
            // }}
          >
            <div className="animation__gadget-container" ref={refGadget}>
              <motion.div
                className="animation__gadget"
                style={{
                  rotate: 90,
                  transformOrigin: "center center",
                }}
              >
                <Img
                  className="animation__gadget-iphone-image"
                  fluid={content.animationPhoneImg.fluid}
                />

                <motion.div
                  className="animation__gadget-overlay-image-1"
                  // style={{
                  //   x: xPosOverlayImage1,
                  //   y: yPosOverlayImage1,
                  // }}
                >
                  <Img fluid={content.animationOverlayImg1.fluid} />
                </motion.div>

                <motion.div
                  className="animation__gadget-overlay-image-2"
                  // style={{
                  //   x: xPosOverlayImage2,
                  //   y: yPosOverlayImage2,
                  //   scale: scaleOverlayImage2,
                  // }}
                >
                  <Img fluid={content.animationOverlayImg2.fluid} />
                </motion.div>

                <motion.div
                  className="animation__gadget-image animation__gadget-image-1"
                  // style={{
                  //   x: xPosImage1,
                  //   y: yPosImage1,
                  // }}
                >
                  <Img fluid={content.animationImg1.fluid} />
                </motion.div>

                <motion.div
                  className="animation__gadget-image animation__gadget-image-2"
                  // style={{
                  //   x: xPosImage2,
                  //   y: yPosImage2,
                  //   scale: scaleImage2,
                  // }}
                >
                  <Img fluid={content.animationImg2.fluid} />
                </motion.div>

                <motion.div
                  className="animation__gadget-image animation__gadget-image-3"
                  // style={{
                  //   x: xPosImage3,
                  //   y: yPosImage3,
                  // }}
                >
                  <Img fluid={content.animationImg3.fluid} />
                </motion.div>

                <motion.div
                  className="animation__gadget-image animation__gadget-image-4"
                  // style={{
                  //   x: xPosImage4,
                  //   y: yPosImage4,
                  //   scale: scaleImage4,
                  // }}
                >
                  <Img fluid={content.animationImg4.fluid} />
                </motion.div>

                <motion.div
                  className="animation__gadget-image animation__gadget-image-5"
                  // style={{
                  //   x: xPosImage5,
                  //   y: yPosImage5,
                  //   scale: scaleImage5,
                  // }}
                >
                  <Img fluid={content.animationImg5.fluid} />
                </motion.div>

                <motion.div
                  className="animation__gadget-image animation__gadget-image-6"
                  // style={{
                  //   x: xPosImage6,
                  //   y: yPosImage6,
                  // }}
                >
                  <Img fluid={content.animationImg6.fluid} />
                </motion.div>

                <motion.div
                  className="animation__gadget-image animation__gadget-image-7"
                  // style={{
                  //   x: xPosImage7,
                  //   y: yPosImage7,
                  // }}
                >
                  <Img fluid={content.animationImg7.fluid} />
                </motion.div>

                <motion.div
                  className="animation__gadget-image animation__gadget-image-8"
                  // style={{
                  //   x: xPosImage8,
                  //   y: yPosImage8,
                  //   scale: scaleImage8,
                  // }}
                >
                  <Img fluid={content.animationImg8.fluid} />
                </motion.div>

                <motion.div
                  className="animation__gadget-image animation__gadget-image-9"
                  // style={{
                  //   x: xPosImage9,
                  //   y: yPosImage9,
                  // }}
                >
                  <Img fluid={content.animationImg9.fluid} />
                </motion.div>
              </motion.div>
            </div>
            <motion.div
              className="animation__info-container"
              // style={{ opacity: opacityText }}
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
