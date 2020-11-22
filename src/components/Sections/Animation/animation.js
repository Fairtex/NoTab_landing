import React, { useRef, useMemo, useCallback } from "react"
import Img from "gatsby-image"
import { motion, useTransform, useViewportScroll } from "framer-motion"
import { useRefScrollProgress, useRect } from "@hooks"

const Animation = ({ content }) => {
  const refContainer = useRef()
  const { scrollYProgress } = useViewportScroll()
  const { start, end } = useRefScrollProgress(refContainer)
  const rectContainer = useRect(refContainer)

  const stepSize = useMemo(() => {
    return (end - start) / 18
  }, [start, end])

  const getStep = useCallback(
    step => {
      return start + stepSize * step
    },
    [start, stepSize]
  )

  const xPosRow = useTransform(
    scrollYProgress,
    [start, getStep(2)],
    [0, rectContainer.width / 2 - rectContainer.width / 4]
  )
  const degIphone = useTransform(
    scrollYProgress,
    [getStep(2), getStep(3)],
    [90, 0]
  )
  const opacityText = useTransform(
    scrollYProgress,
    [getStep(2), getStep(3)],
    [1, 0]
  )
  const scaleIphone = useTransform(
    scrollYProgress,
    [getStep(4), getStep(12)],
    [1.27, 0.735]
  )

  const xPosOverlayImage1 = useTransform(
    scrollYProgress,
    [getStep(8), getStep(12)],
    ["0", "175%"]
  )
  const yPosOverlayImage1 = useTransform(
    scrollYProgress,
    [getStep(8), getStep(12)],
    ["0", "165%"]
  )

  const xPosOverlayImage2 = useTransform(
    scrollYProgress,
    [getStep(3), getStep(12)],
    ["0", "-145%"]
  )
  const yPosOverlayImage2 = useTransform(
    scrollYProgress,
    [getStep(3), getStep(12)],
    ["0", "-111%"]
  )
  const scaleOverlayImage2 = useTransform(
    scrollYProgress,
    [getStep(12), end],
    [1, 1.1]
  )

  const xPosImage1 = useTransform(
    scrollYProgress,
    [getStep(8), getStep(12)],
    ["0", "-55"]
  )
  const yPosImage1 = useTransform(
    scrollYProgress,
    [getStep(8), getStep(12)],
    ["0", "505%"]
  )

  const xPosImage2 = useTransform(
    scrollYProgress,
    [getStep(4), getStep(12)],
    ["0", "-209%"]
  )
  const yPosImage2 = useTransform(
    scrollYProgress,
    [getStep(4), getStep(12)],
    ["0", "169%"]
  )
  const scaleImage2 = useTransform(
    scrollYProgress,
    [getStep(12), end],
    [1, 1.1]
  )

  const xPosImage3 = useTransform(
    scrollYProgress,
    [getStep(8), getStep(12)],
    ["0", "-238%"]
  )
  const yPosImage3 = useTransform(
    scrollYProgress,
    [getStep(8), getStep(12)],
    ["0", "171%"]
  )

  const xPosImage4 = useTransform(
    scrollYProgress,
    [getStep(4), getStep(12)],
    ["0", "-435%"]
  )
  const yPosImage4 = useTransform(
    scrollYProgress,
    [getStep(4), getStep(12)],
    ["0", "42%"]
  )
  const scaleImage4 = useTransform(
    scrollYProgress,
    [getStep(12), end],
    [1, 1.1]
  )

  const xPosImage5 = useTransform(
    scrollYProgress,
    [getStep(4), getStep(12)],
    ["0", "250%"]
  )
  const yPosImage5 = useTransform(
    scrollYProgress,
    [getStep(4), getStep(12)],
    ["0", "26%"]
  )
  const scaleImage5 = useTransform(
    scrollYProgress,
    [getStep(12), end],
    [1, 0.9]
  )

  const xPosImage6 = useTransform(
    scrollYProgress,
    [getStep(8), getStep(12)],
    ["0", "776%"]
  )
  const yPosImage6 = useTransform(
    scrollYProgress,
    [getStep(8), getStep(12)],
    ["0", "140%"]
  )
  const xPosImage7 = useTransform(
    scrollYProgress,
    [getStep(8), getStep(12)],
    ["0", "386%"]
  )
  const yPosImage7 = useTransform(
    scrollYProgress,
    [getStep(8), getStep(12)],
    ["0", "-87%"]
  )

  const xPosImage8 = useTransform(
    scrollYProgress,
    [getStep(4), getStep(12)],
    ["0", "159%"]
  )
  const yPosImage8 = useTransform(
    scrollYProgress,
    [getStep(4), getStep(12)],
    ["0", "-227%"]
  )
  const scaleImage8 = useTransform(
    scrollYProgress,
    [getStep(12), end],
    [1, 1.1]
  )

  const xPosImage9 = useTransform(
    scrollYProgress,
    [getStep(8), getStep(12)],
    ["0", "-551%"]
  )
  const yPosImage9 = useTransform(
    scrollYProgress,
    [getStep(8), getStep(12)],
    ["0", "-245%"]
  )

  return (
    <section className="animation">
      <div className="container" ref={refContainer}>
        <div className="animation__inner">
          <motion.div
            className="animation__row"
            style={{
              x: xPosRow,
            }}
          >
            <div className="animation__row-item animation__row-item--center">
              <motion.div
                className="animation__gadget-container"
                style={{
                  rotate: degIphone,
                  scale: scaleIphone,
                  transformOrigin: "center center",
                }}
              >
                <div className="animation__gadget">
                  <Img
                    className="animation__gadget-iphone-image"
                    fluid={content.animationPhoneImg.fluid}
                  />

                  <motion.div
                    className="animation__gadget-overlay-image-1"
                    style={{
                      x: xPosOverlayImage1,
                      y: yPosOverlayImage1,
                    }}
                  >
                    <Img fluid={content.animationOverlayImg1.fluid} />
                  </motion.div>

                  <motion.div
                    className="animation__gadget-overlay-image-2"
                    style={{
                      x: xPosOverlayImage2,
                      y: yPosOverlayImage2,
                      scale: scaleOverlayImage2,
                    }}
                  >
                    <Img fluid={content.animationOverlayImg2.fluid} />
                  </motion.div>

                  <motion.div
                    className="animation__gadget-image animation__gadget-image-1"
                    style={{
                      x: xPosImage1,
                      y: yPosImage1,
                    }}
                  >
                    <Img fluid={content.animationImg1.fluid} />
                  </motion.div>

                  <motion.div
                    className="animation__gadget-image animation__gadget-image-2"
                    style={{
                      x: xPosImage2,
                      y: yPosImage2,
                      scale: scaleImage2,
                    }}
                  >
                    <Img fluid={content.animationImg2.fluid} />
                  </motion.div>

                  <motion.div
                    className="animation__gadget-image animation__gadget-image-3"
                    style={{
                      x: xPosImage3,
                      y: yPosImage3,
                    }}
                  >
                    <Img fluid={content.animationImg3.fluid} />
                  </motion.div>

                  <motion.div
                    className="animation__gadget-image animation__gadget-image-4"
                    style={{
                      x: xPosImage4,
                      y: yPosImage4,
                      scale: scaleImage4,
                    }}
                  >
                    <Img fluid={content.animationImg4.fluid} />
                  </motion.div>

                  <motion.div
                    className="animation__gadget-image animation__gadget-image-5"
                    style={{
                      x: xPosImage5,
                      y: yPosImage5,
                      scale: scaleImage5,
                    }}
                  >
                    <Img fluid={content.animationImg5.fluid} />
                  </motion.div>

                  <motion.div
                    className="animation__gadget-image animation__gadget-image-6"
                    style={{
                      x: xPosImage6,
                      y: yPosImage6,
                    }}
                  >
                    <Img fluid={content.animationImg6.fluid} />
                  </motion.div>

                  <motion.div
                    className="animation__gadget-image animation__gadget-image-7"
                    style={{
                      x: xPosImage7,
                      y: yPosImage7,
                    }}
                  >
                    <Img fluid={content.animationImg7.fluid} />
                  </motion.div>

                  <motion.div
                    className="animation__gadget-image animation__gadget-image-8"
                    style={{
                      x: xPosImage8,
                      y: yPosImage8,
                      scale: scaleImage8,
                    }}
                  >
                    <Img fluid={content.animationImg8.fluid} />
                  </motion.div>

                  <motion.div
                    className="animation__gadget-image animation__gadget-image-9"
                    style={{
                      x: xPosImage9,
                      y: yPosImage9,
                    }}
                  >
                    <Img fluid={content.animationImg9.fluid} />
                  </motion.div>
                </div>
              </motion.div>
            </div>
            <motion.div
              className="animation__row-item"
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
