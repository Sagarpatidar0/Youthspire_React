import "./ScrollingCanvas.css";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import { imageData } from "../cms/ScrollerData";

const Scroller = () => {
  const canvasRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      const getCurrentTranslate = () => {
        if (canvasRef.current) {
          const scrollY = window.scrollY;
          canvasRef.current.style.paddingTop = `${scrollY}px`;
        }
      };

      function locomotive() {
        gsap.registerPlugin(ScrollTrigger);

        const locoScroll = new LocomotiveScroll({
          el: document.querySelector("#main"),
          smooth: true,
        });
        locoScroll.on("scroll", ScrollTrigger.update);

        ScrollTrigger.scrollerProxy("#main", {
          scrollTop(value) {
            return arguments.length
              ? locoScroll.scrollTo(value, 0, 0)
              : locoScroll.scroll.instance.scroll.y;
          },

          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            };
          },

          pinType: document.querySelector("#main").style.transform
            ? "transform"
            : "fixed",
        });
        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
        ScrollTrigger.refresh();
      }

      locomotive();

      const canvas = document.querySelector("canvas");
      const context = canvas.getContext("2d");

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
      });

      function files(index) {
        var data = imageData;
        return data.split("\n")[index];
      }

      const frameCount = 300;
      const images = [];
      const imageSeq = {
        frame: 1,
      };

      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
      }

      gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: `none`,
        scrollTrigger: {
          scrub: 0.05,
          trigger: `canvas`,
          start: `top top`,
          end: `400% top`,
          scroller: `#main`,
          markers: false,
        },
        onUpdate: render,
      });

      images[1].onload = render;

      function render() {
        getCurrentTranslate();
        scaleImage(images[imageSeq.frame], context);
      }

      function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio) - 0.9;
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
          img,
          0,
          60,
          img.width,
          img.height,
          centerShift_x,
          centerShift_y,
          img.width * ratio,
          img.height * ratio
        );
      }

      ScrollTrigger.create({
        trigger: "canvas",
        pin: true,
        scroller: `#main`,
        start: `top top`,
        end: `800% top`,
        markers: true,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div id="main" data-scroll-container>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default Scroller;
