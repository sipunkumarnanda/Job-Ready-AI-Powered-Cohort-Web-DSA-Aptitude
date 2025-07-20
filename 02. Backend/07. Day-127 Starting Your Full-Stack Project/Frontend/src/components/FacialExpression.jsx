import React, { useRef, useEffect } from 'react';
import * as faceapi from 'face-api.js';

const FacialExpression = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const loadModelsAndStart = async () => {
      await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
      await faceapi.nets.faceExpressionNet.loadFromUri('/models');

      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;

      videoRef.current.onloadedmetadata = () => {
        detectExpressions();
      };
    };

    const detectExpressions = async () => {
      const video = videoRef.current;

      const detect = async () => {
        const detections = await faceapi
          .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
          .withFaceExpressions();

        if (detections.length > 0) {
          const expressions = detections[0].expressions;
          const top = Object.entries(expressions).reduce((a, b) =>
            b[1] > a[1] ? b : a
          );
          console.log(top);
          console.log('Expression:', top[0], 'Confidence:', top[1].toFixed(2));
        }

        requestAnimationFrame(detect);
      };

      detect();
    };

    loadModelsAndStart();
  }, []);

  return <video ref={videoRef} autoPlay muted width="720" height="560" />;
};

export default FacialExpression;
