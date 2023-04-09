// Load the pre-trained MobileNet model
const model = await tf.loadLayersModel('https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v2_100_224/classification/3/default/1', { fromTFHub: true });

// Define a function to classify images
function classifyImage(img) {
    return tf.tidy(() => {
        // Pre-process the image
        const imgTensor = tf.browser.fromPixels(img).resizeBilinear([224, 224]).toFloat();
        const mean = tf.tensor1d([123.68, 116.779, 103.939]);
        const std = tf.tensor1d([58.393, 57.12, 57.375]);
        const preprocessedImg = imgTensor.sub(mean).div(std).expandDims();

        // Make a prediction with the pre-trained model
        const predictions = model.predict(preprocessedImg);

        // Get the top predicted classes and their probabilities
        const topClasses = Array.from(predictions.argMax(1).dataSync());
        const topProbabilities = Array.from(predictions.max(1).dataSync());

        return { topClasses, topProbabilities };
    });
}

// Example usage
const imgElement = document.getElementById('img');
imgElement.onload = () => {
    const { topClasses, topProbabilities } = classifyImage(imgElement);
    console.log('Top Classes:', topClasses);
    console.log('Top Probabilities:', topProbabilities);
};
imgElement.src = 'https://example.com/dog.jpg'; // Replace with your own image URL
