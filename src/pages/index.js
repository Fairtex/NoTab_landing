import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "@components/layout"
import SEO from "@components/seo"
import Hero from "@components/Sections/Hero"
import Partners from "@components/Sections/Partners"
import Animation from "@components/Sections/Animation"
import CookieBar from "@components/Sections/CookieBanner"
import IdScanner from "@components/Sections/ID-scan"
import Tool from "@components/Sections/Tool"
import QrCode from "@components/Sections/QR-Code"
import GenerateQR from "@components/Sections/GenerateQr"
import OrderInterface from "@components/Sections/Order"
import VideoBlock from "@components/Sections/VideoBlock"
import GreetingForm from "@components/Sections/GreetingForm"

import "@assets/styles/style.scss"

const IndexPage = () => {
  const {
    heroContent,
    partnersContent,
    animationContent,
    scanContent,
    toolContent,
    qrCodeContent,
    generateQrCode,
    orderContent,
    videoContent,
    formContent,
  } = useStaticQuery(graphql`
    {
      heroContent: contentfulHeroContent(
        id: { eq: "4c528c92-efda-5222-bd23-3fcb0f2dbfd0" }
      ) {
        heroImage {
          fluid(quality: 80, maxHeight: 668, maxWidth: 333) {
            ...GatsbyContentfulFluid_noBase64
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
        heroImageMobile {
          fluid(quality: 80, maxHeight: 323, maxWidth: 161) {
            ...GatsbyContentfulFluid_noBase64
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
        heroTitle
        heroText {
          heroText
        }
      }
      partnersContent: contentfulContactContent(
        id: { eq: "7501835e-a1f0-50b8-8444-c9c7c0fcc014" }
      ) {
        contactMail
        contactText {
          contactText
        }
        partnerLinkText
        partnerText {
          partnerText
        }
        partnerLink
      }
      animationContent: contentfulAnimationSectionContent(
        id: { eq: "45a72972-158f-51aa-ae17-e0f0b0548a7a" }
      ) {
        animationBlockTitle
        animationBlockText {
          animationBlockText
        }
        animationPhoneImg {
          fluid(quality: 80, maxHeight: 745, maxWidth: 372) {
            ...GatsbyContentfulFluid
            ...GatsbyContentfulFluid_withWebp
          }
        }
        animationOverlayImg1 {
          fluid(quality: 80, maxHeight: 260, maxWidth: 285) {
            ...GatsbyContentfulFluid
            ...GatsbyContentfulFluid_withWebp
          }
        }
        animationOverlayImg2 {
          fluid(quality: 80, maxHeight: 270, maxWidth: 295) {
            ...GatsbyContentfulFluid
            ...GatsbyContentfulFluid_withWebp
          }
        }
        animationImg9 {
          fluid(quality: 80, maxHeight: 188, maxWidth: 127) {
            ...GatsbyContentfulFluid
            ...GatsbyContentfulFluid_withWebp
          }
        }
        animationImg8 {
          fluid(quality: 80, maxHeight: 204, maxWidth: 271) {
            ...GatsbyContentfulFluid
            ...GatsbyContentfulFluid_withWebp
          }
        }
        animationImg7 {
          fluid(quality: 80, maxHeight: 238, maxWidth: 160) {
            ...GatsbyContentfulFluid
            ...GatsbyContentfulFluid_withWebp
          }
        }
        animationImg6 {
          fluid(quality: 80, maxHeight: 138, maxWidth: 92) {
            ...GatsbyContentfulFluid
            ...GatsbyContentfulFluid_withWebp
          }
        }
        animationImg5 {
          fluid(quality: 80, maxHeight: 222, maxWidth: 160) {
            ...GatsbyContentfulFluid
            ...GatsbyContentfulFluid_withWebp
          }
        }
        animationImg4 {
          fluid(quality: 80, maxHeight: 189, maxWidth: 127) {
            ...GatsbyContentfulFluid
            ...GatsbyContentfulFluid_withWebp
          }
        }
        animationImg3 {
          fluid(quality: 80, maxHeight: 156, maxWidth: 150) {
            ...GatsbyContentfulFluid
            ...GatsbyContentfulFluid_withWebp
          }
        }
        animationImg2 {
          fluid(quality: 80, maxHeight: 271, maxWidth: 297) {
            ...GatsbyContentfulFluid
            ...GatsbyContentfulFluid_withWebp
          }
        }
        animationImg1 {
          fluid(quality: 80, maxHeight: 121, maxWidth: 220) {
            ...GatsbyContentfulFluid
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
      scanContent: contentfulIdBlockContent(
        id: { eq: "fc887afd-3e68-52a6-984d-a42eb61c0261" }
      ) {
        idBlockTitle
        idBlockText {
          idBlockText
        }
        idBlockBackground {
          fluid(quality: 80) {
            ...GatsbyContentfulFluid
            ...GatsbyContentfulFluid_withWebp
          }
        }
        idBlockBackgroundMobile {
          fluid(quality: 80) {
            ...GatsbyContentfulFluid
            ...GatsbyContentfulFluid_withWebp
          }
        }
        idBlockImage {
          fluid(quality: 80) {
            ...GatsbyContentfulFluid
            ...GatsbyContentfulFluid_withWebp
          }
        }
        idBlockImageMobile {
          fluid(quality: 80) {
            ...GatsbyContentfulFluid
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
      toolContent: contentfulBiToolContent(
        id: { eq: "226f1a92-4089-5ec9-8f42-eec0947a5020" }
      ) {
        biToolTitle
        biToolText {
          biToolText
        }
      }
      qrCodeContent: contentfulQrCodeContent(
        id: { eq: "e9d39e98-2ee8-53a7-98b9-9a966f9d2ca8" }
      ) {
        qrCodeTitle
        qrCodeText {
          qrCodeText
        }
        qrCodeBackground {
          fluid(quality: 80) {
            ...GatsbyContentfulFluid
            ...GatsbyContentfulFluid_withWebp
          }
        }
        qrCodeBackgroundMobile {
          fluid(quality: 80) {
            ...GatsbyContentfulFluid
            ...GatsbyContentfulFluid_withWebp
          }
        }
        qrCodeBackground2Mobile {
          fluid(quality: 80) {
            ...GatsbyContentfulFluid
            ...GatsbyContentfulFluid_withWebp
          }
        }
        qrCodeImage {
          fluid(quality: 80) {
            ...GatsbyContentfulFluid
            ...GatsbyContentfulFluid_withWebp
          }
        }
        qrCodeImageMobile {
          fluid(quality: 80) {
            ...GatsbyContentfulFluid
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
      generateQrCode: contentfulGenerateQrContent(
        id: { eq: "84bb34d7-052c-5216-b40b-25101c83d2fe" }
      ) {
        generateQrTitle
        generateQrText {
          generateQrText
        }
        generateQrImage {
          fluid(quality: 80) {
            ...GatsbyContentfulFluid
            ...GatsbyContentfulFluid_withWebp
          }
        }
        generateQrImageMobile {
          fluid(quality: 80) {
            ...GatsbyContentfulFluid
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
      orderContent: contentfulOrderInterfaceBlock(
        id: { eq: "f98bf6b3-0ed2-534f-8cf1-84c1c96e854b" }
      ) {
        orderInterfaceTitle
        orderInterfaceText {
          orderInterfaceText
        }
        orderInterfaceImage {
          fluid(quality: 80) {
            ...GatsbyContentfulFluid
            ...GatsbyContentfulFluid_withWebp
          }
        }
        orderInterfaceImageMobile {
          fluid(quality: 80) {
            ...GatsbyContentfulFluid
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
      videoContent: contentfulVideoBlock(
        id: { eq: "f2979445-fcdd-5ffe-a045-85bacc6c918e" }
      ) {
        videoBlockVideo {
          file {
            url
          }
        }
      }
      formContent: contentfulFormContent(
        id: { eq: "9e863c47-772d-5a91-a08b-939e24da7829" }
      ) {
        formTitle
        formText {
          formText
        }
        formButtonText
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Hero content={heroContent} />
      <Partners content={partnersContent} />
      <Animation content={animationContent} />
      <CookieBar />
      <IdScanner content={scanContent} />
      <Tool content={toolContent} />
      <QrCode content={qrCodeContent} />
      <GenerateQR content={generateQrCode} />
      <OrderInterface content={orderContent} />
      <VideoBlock content={videoContent} />
      <GreetingForm content={formContent} />
    </Layout>
  )
}

export default IndexPage
