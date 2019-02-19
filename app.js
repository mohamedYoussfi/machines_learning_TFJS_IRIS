
/*
let inputTrainData= [
    [5.1,3.5,1.4,0.2],[4.9,3.0,1.4,0.2],[4.7,3.2,1.3,0.2],[4.6,3.1,1.5,0.2],
    [5.0,3.6,1.4,0.2],[5.4,3.9,1.7,0.4],[4.6,3.4,1.4,0.3],[5.0,3.4,1.5,0.2],
    [4.4,2.9,1.4,0.2],[4.9,3.1,1.5,0.1],[5.4,3.7,1.5,0.2],[4.8,3.4,1.6,0.2],
    [4.8,3.0,1.4,0.1],[4.3,3.0,1.1,0.1],[5.8,4.0,1.2,0.2],[5.7,4.4,1.5,0.4],
    [5.4,3.9,1.3,0.4],[5.1,3.5,1.4,0.3],[5.7,3.8,1.7,0.3],[5.1,3.8,1.5,0.3],
    [5.4,3.4,1.7,0.2],[5.1,3.7,1.5,0.4],[4.6,3.6,1.0,0.2],[5.1,3.3,1.7,0.5],
    [4.8,3.4,1.9,0.2],[5.0,3.0,1.6,0.2],[5.0,3.4,1.6,0.4],[5.2,3.5,1.5,0.2],
    [5.2,3.4,1.4,0.2],[4.7,3.2,1.6,0.2],[4.8,3.1,1.6,0.2],[5.4,3.4,1.5,0.4],
    [5.2,4.1,1.5,0.1],[5.5,4.2,1.4,0.2],[4.9,3.1,1.5,0.1],[5.0,3.2,1.2,0.2],
    [5.5,3.5,1.3,0.2],[4.9,3.1,1.5,0.1],[4.4,3.0,1.3,0.2],[5.1,3.4,1.5,0.2],
    [7.0,3.2,4.7,1.4],[6.4,3.2,4.5,1.5],[6.9,3.1,4.9,1.5],[5.5,2.3,4.0,1.3],
    [6.5,2.8,4.6,1.5],[5.7,2.8,4.5,1.3],[6.3,3.3,4.7,1.6],[4.9,2.4,3.3,1.0],
    [6.6,2.9,4.6,1.3],[5.2,2.7,3.9,1.4],[5.0,2.0,3.5,1.0],[5.9,3.0,4.2,1.5],
    [6.0,2.2,4.0,1.0],[6.1,2.9,4.7,1.4],[5.6,2.9,3.6,1.3],[6.7,3.1,4.4,1.4],
    [5.6,3.0,4.5,1.5],[5.8,2.7,4.1,1.0],[6.2,2.2,4.5,1.5],[5.6,2.5,3.9,1.1],
    [5.9,3.2,4.8,1.8],[6.1,2.8,4.0,1.3],[6.3,2.5,4.9,1.5],[6.1,2.8,4.7,1.2],
    [6.4,2.9,4.3,1.3],[6.6,3.0,4.4,1.4],[6.8,2.8,4.8,1.4],[6.7,3.0,5.0,1.7],
    [6.0,2.9,4.5,1.5],[5.7,2.6,3.5,1.0],[5.5,2.4,3.8,1.1],[5.5,2.4,3.7,1.0],
    [5.8,2.7,3.9,1.2],[6.0,2.7,5.1,1.6],[5.4,3.0,4.5,1.5],[6.0,3.4,4.5,1.6],
    [6.7,3.1,4.7,1.5],[6.3,2.3,4.4,1.3],[5.6,3.0,4.1,1.3],[5.5,2.5,4.0,1.3],
    [6.3,3.3,6.0,2.5],[5.8,2.7,5.1,1.9],[7.1,3.0,5.9,2.1],[6.3,2.9,5.6,1.8],
    [6.5,3.0,5.8,2.2],[7.6,3.0,6.6,2.1],[4.9,2.5,4.5,1.7],[7.3,2.9,6.3,1.8],
    [6.7,2.5,5.8,1.8],[7.2,3.6,6.1,2.5],[6.5,3.2,5.1,2.0],[6.4,2.7,5.3,1.9],
    [6.8,3.0,5.5,2.1],[5.7,2.5,5.0,2.0],[5.8,2.8,5.1,2.4],[6.4,3.2,5.3,2.3],
    [6.5,3.0,5.5,1.8],[7.7,3.8,6.7,2.2],[7.7,2.6,6.9,2.3],[6.0,2.2,5.0,1.5],
    [6.9,3.2,5.7,2.3],[5.6,2.8,4.9,2.0],[7.7,2.8,6.7,2.0],[6.3,2.7,4.9,1.8],
    [6.7,3.3,5.7,2.1],[7.2,3.2,6.0,1.8],[6.2,2.8,4.8,1.8],[6.1,3.0,4.9,1.8],
    [6.4,2.8,5.6,2.1],[7.2,3.0,5.8,1.6],[7.4,2.8,6.1,1.9],[7.9,3.8,6.4,2.0],
    [6.4,2.8,5.6,2.2],[6.3,2.8,5.1,1.5],[6.1,2.6,5.6,1.4],[7.7,3.0,6.1,2.3],
    [6.3,3.4,5.6,2.4],[6.4,3.1,5.5,1.8],[6.0,3.0,4.8,1.8],[6.9,3.1,5.4,2.1]
];
const outputTrainData=[
    [1,0,0],[1,0,0],[1,0,0],[1,0,0],[1,0,0],[1,0,0],[1,0,0],[1,0,0],[1,0,0],[1,0,0],
    [1,0,0],[1,0,0],[1,0,0],[1,0,0],[1,0,0],[1,0,0],[1,0,0],[1,0,0],[1,0,0],[1,0,0],
    [1,0,0],[1,0,0],[1,0,0],[1,0,0],[1,0,0],[1,0,0],[1,0,0],[1,0,0],[1,0,0],[1,0,0],
    [1,0,0],[1,0,0],[1,0,0],[1,0,0],[1,0,0],[1,0,0],[1,0,0],[1,0,0],[1,0,0],[1,0,0],
    [0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0],
    [0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0],
    [0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0],
    [0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0],
    [0,0,1],[0,0,1],[0,0,1],[0,0,1],[0,0,1],[0,0,1],[0,0,1],[0,0,1],[0,0,1],[0,0,1],
    [0,0,1],[0,0,1],[0,0,1],[0,0,1],[0,0,1],[0,0,1],[0,0,1],[0,0,1],[0,0,1],[0,0,1],
    [0,0,1],[0,0,1],[0,0,1],[0,0,1],[0,0,1],[0,0,1],[0,0,1],[0,0,1],[0,0,1],[0,0,1],
    [0,0,1],[0,0,1],[0,0,1],[0,0,1],[0,0,1],[0,0,1],[0,0,1],[0,0,1],[0,0,1],[0,0,1]
]

const inputTestData=[
    [5.0,3.5,1.3,0.3],[4.5,2.3,1.3,0.3],[4.4,3.2,1.3,0.2],[5.0,3.5,1.6,0.6],
    [5.1,3.8,1.9,0.4],[4.8,3.0,1.4,0.3],[5.1,3.8,1.6,0.2],[4.6,3.2,1.4,0.2],
    [5.3,3.7,1.5,0.2],[5.0,3.3,1.4,0.2],[5.5,2.6,4.4,1.2],[6.1,3.0,4.6,1.4],
    [5.8,2.6,4.0,1.2],[5.0,2.3,3.3,1.0],[5.6,2.7,4.2,1.3],[5.7,3.0,4.2,1.2],
    [5.7,2.9,4.2,1.3],[6.2,2.9,4.3,1.3],[5.1,2.5,3.0,1.1],[5.7,2.8,4.1,1.3],
    [6.7,3.1,5.6,2.4],[6.9,3.1,5.1,2.3],[5.8,2.7,5.1,1.9],[6.8,3.2,5.9,2.3],
    [6.7,3.3,5.7,2.5],[6.7,3.0,5.2,2.3],[6.3,2.5,5.0,1.9],[6.5,3.0,5.2,2.0],
    [6.2,3.4,5.4,2.3],[5.9,3.0,5.1,1.8]
]
const outputTestData=[
    [1,0,0],[1,0,0],[1,0,0],[1,0,0],[1,0,0],[1,0,0],[1,0,0],[1,0,0],[1,0,0],[1,0,0],
    [0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0],
    [0,0,1],[0,0,1],[0,0,1],[0,0,1],[0,0,1],[0,0,1],[0,0,1],[0,0,1],[0,0,1],[0,0,1]
]*/


let irisClasses=['Iris-setosa','Iris-versicolor','Iris-virginica'];
const dataByClass=[];
const targetsByClass=[];
let irisDataSet= [
    [5.1,3.5,1.4,0.2,0],[4.9,3.0,1.4,0.2,0],[4.7,3.2,1.3,0.2,0],[4.6,3.1,1.5,0.2,0],
    [5.0,3.6,1.4,0.2,0],[5.4,3.9,1.7,0.4,0],[4.6,3.4,1.4,0.3,0],[5.0,3.4,1.5,0.2,0],
    [4.4,2.9,1.4,0.2,0],[4.9,3.1,1.5,0.1,0],[5.4,3.7,1.5,0.2,0],[4.8,3.4,1.6,0.2,0],
    [4.8,3.0,1.4,0.1,0],[4.3,3.0,1.1,0.1,0],[5.8,4.0,1.2,0.2,0],[5.7,4.4,1.5,0.4,0],
    [5.4,3.9,1.3,0.4,0],[5.1,3.5,1.4,0.3,0],[5.7,3.8,1.7,0.3,0],[5.1,3.8,1.5,0.3,0],
    [5.4,3.4,1.7,0.2,0],[5.1,3.7,1.5,0.4,0],[4.6,3.6,1.0,0.2,0],[5.1,3.3,1.7,0.5,0],
    [4.8,3.4,1.9,0.2,0],[5.0,3.0,1.6,0.2,0],[5.0,3.4,1.6,0.4,0],[5.2,3.5,1.5,0.2,0],
    [5.2,3.4,1.4,0.2,0],[4.7,3.2,1.6,0.2,0],[4.8,3.1,1.6,0.2,0],[5.4,3.4,1.5,0.4,0],
    [5.2,4.1,1.5,0.1,0],[5.5,4.2,1.4,0.2,0],[4.9,3.1,1.5,0.1,0],[5.0,3.2,1.2,0.2,0],
    [5.5,3.5,1.3,0.2,0],[4.9,3.1,1.5,0.1,0],[4.4,3.0,1.3,0.2,0],[5.1,3.4,1.5,0.2,0],
    [5.0,3.5,1.3,0.3,0],[4.5,2.3,1.3,0.3,0],[4.4,3.2,1.3,0.2,0],[5.0,3.5,1.6,0.6,0],
    [5.1,3.8,1.9,0.4,0],[4.8,3.0,1.4,0.3,0],[5.1,3.8,1.6,0.2,0],[4.6,3.2,1.4,0.2,0],
    [5.3,3.7,1.5,0.2,0],[5.0,3.3,1.4,0.2,0],[7.0,3.2,4.7,1.4,1],[6.4,3.2,4.5,1.5,1],
    [6.9,3.1,4.9,1.5,1],[5.5,2.3,4.0,1.3,1],[6.5,2.8,4.6,1.5,1],[5.7,2.8,4.5,1.3,1],
    [6.3,3.3,4.7,1.6,1],[4.9,2.4,3.3,1.0,1],[6.6,2.9,4.6,1.3,1],[5.2,2.7,3.9,1.4,1],
    [5.0,2.0,3.5,1.0,1],[5.9,3.0,4.2,1.5,1],[6.0,2.2,4.0,1.0,1],[6.1,2.9,4.7,1.4,1],
    [5.6,2.9,3.6,1.3,1],[6.7,3.1,4.4,1.4,1],[5.6,3.0,4.5,1.5,1],[5.8,2.7,4.1,1.0,1],
    [6.2,2.2,4.5,1.5,1],[5.6,2.5,3.9,1.1,1],[5.9,3.2,4.8,1.8,1],[6.1,2.8,4.0,1.3,1],
    [6.3,2.5,4.9,1.5,1],[6.1,2.8,4.7,1.2,1],[6.4,2.9,4.3,1.3,1],[6.6,3.0,4.4,1.4,1],
    [6.8,2.8,4.8,1.4,1],[6.7,3.0,5.0,1.7,1],[6.0,2.9,4.5,1.5,1],[5.7,2.6,3.5,1.0,1],
    [5.5,2.4,3.8,1.1,1],[5.5,2.4,3.7,1.0,1],[5.8,2.7,3.9,1.2,1],[6.0,2.7,5.1,1.6,1],
    [5.4,3.0,4.5,1.5,1],[6.0,3.4,4.5,1.6,1],[6.7,3.1,4.7,1.5,1],[6.3,2.3,4.4,1.3,1],
    [5.6,3.0,4.1,1.3,1],[5.5,2.5,4.0,1.3,1],[5.5,2.6,4.4,1.2,1],[6.1,3.0,4.6,1.4,1],
    [5.8,2.6,4.0,1.2,1],[5.0,2.3,3.3,1.0,1],[5.6,2.7,4.2,1.3,1],[5.7,3.0,4.2,1.2,1],
    [5.7,2.9,4.2,1.3,1],[6.2,2.9,4.3,1.3,1],[5.1,2.5,3.0,1.1,1],[5.7,2.8,4.1,1.3,1],
    [6.3,3.3,6.0,2.5,2],[5.8,2.7,5.1,1.9,2],[7.1,3.0,5.9,2.1,2],[6.3,2.9,5.6,1.8,2],
    [6.5,3.0,5.8,2.2,2],[7.6,3.0,6.6,2.1,2],[4.9,2.5,4.5,1.7,2],[7.3,2.9,6.3,1.8,2],
    [6.7,2.5,5.8,1.8,2],[7.2,3.6,6.1,2.5,2],[6.5,3.2,5.1,2.0,2],[6.4,2.7,5.3,1.9,2],
    [6.8,3.0,5.5,2.1,2],[5.7,2.5,5.0,2.0,2],[5.8,2.8,5.1,2.4,2],[6.4,3.2,5.3,2.3,2],
    [6.5,3.0,5.5,1.8,2],[7.7,3.8,6.7,2.2,2],[7.7,2.6,6.9,2.3,2],[6.0,2.2,5.0,1.5,2],
    [6.9,3.2,5.7,2.3,2],[5.6,2.8,4.9,2.0,2],[7.7,2.8,6.7,2.0,2],[6.3,2.7,4.9,1.8,2],
    [6.7,3.3,5.7,2.1,2],[7.2,3.2,6.0,1.8,2],[6.2,2.8,4.8,1.8,2],[6.1,3.0,4.9,1.8,2],
    [6.4,2.8,5.6,2.1,2],[7.2,3.0,5.8,1.6,2],[7.4,2.8,6.1,1.9,2],[7.9,3.8,6.4,2.0,2],
    [6.4,2.8,5.6,2.2,2],[6.3,2.8,5.1,1.5,2],[6.1,2.6,5.6,1.4,2],[7.7,3.0,6.1,2.3,2],
    [6.3,3.4,5.6,2.4,2],[6.4,3.1,5.5,1.8,2],[6.0,3.0,4.8,1.8,2],[6.9,3.1,5.4,2.1,2],
    [6.7,3.1,5.6,2.4,2],[6.9,3.1,5.1,2.3,2],[5.8,2.7,5.1,1.9,2],[6.8,3.2,5.9,2.3,2],
    [6.7,3.3,5.7,2.5,2],[6.7,3.0,5.2,2.3,2],[6.3,2.5,5.0,1.9,2],[6.5,3.0,5.2,2.0,2],
    [6.2,3.4,5.4,2.3,2],[5.9,3.0,5.1,1.8,2]
];

for(let i=0;i<irisClasses.length;i++){
    dataByClass.push([]);
    targetsByClass.push([]);
}

for(let exemple of irisDataSet){
    const target=exemple[exemple.length-1];
    const data=exemple.slice(0,exemple.length-1);
    dataByClass[target].push(data);
    targetsByClass[target].push(target);
}

const xsTrains=[]; const ysTrains=[];
const xsTests=[]; const ysTests=[];
const testSplit=0.2;
for(let i=0;i<irisClasses.length;i++){
    if(dataByClass[i].length!==targetsByClass[i].length)
        throw new Error('Data and Targets have different size');
    let numExamples=dataByClass[i].length;
    let numTestExamples=Math.round(numExamples*testSplit);
    let numTrainExamples=numExamples-numTestExamples;
    let xDims=dataByClass[i][0].length;
    //console.log(xDims);
    //console.log(numExamples);
    //console.log(dataByClass[i]);

    const xs=tf.tensor2d(dataByClass[i]);
    const ys=tf.oneHot(tf.tensor1d(targetsByClass[i]).toInt(),irisClasses.length);
    const xsTrain=xs.slice([0,0],[numTrainExamples,xDims]);
    console.log(numTrainExamples);
    const xsTest=xs.slice([numTrainExamples,0],[numTestExamples,xDims]);
    const ysTrain=ys.slice([0,0],[numTrainExamples,irisClasses.length]);
    const ysTest=ys.slice([numTrainExamples,0],[numTestExamples,irisClasses.length]);
    xsTrains.push(xsTrain);
    ysTrains.push(ysTrain);
    xsTests.push(xsTest);
    ysTests.push(ysTest);

}


const xs=tf.concat(xsTrains,0);
const ys=tf.concat(ysTrains,0);
const xsTest=tf.concat(xsTests,0);
const ysTest=tf.concat(ysTests,0);


/*
const xs=tf.tensor2d(inputTrainData,[inputTrainData.length,4]);
const ys=tf.tensor2d(outputTrainData,[outputTrainData.length,3]);
const xsTest=tf.tensor2d(inputTestData,[inputTestData.length,4]);
const ysTest=tf.tensor2d(outputTestData,[outputTestData.length,3]);
*/

console.log(xs);
console.log(ys);
console.log(xsTest);
console.log(ysTest);

const model=tf.sequential();
const learningRate=0.01;
const numberOfEpochs=100;
const optimizer=tf.train.adam(learningRate);

model.add(tf.layers.dense({
    units:10,activation:'sigmoid',inputShape:xs.shape[1]
}));
model.add(tf.layers.dense({
    units:3,activation:'softmax'
}));

model.compile({
    optimizer:optimizer,
    loss:'meanSquaredError',
    metrics:['accuracy']
});

model.fit(xs,ys,{
    epochs:numberOfEpochs,
    validationData:[xsTest,ysTest],
    callbacks:{
        onEpochEnd:logProrgess
    }
}).then(resp=>{
   console.log(resp.history.loss[0]);
   console.log(resp.history.acc);
   predict();
   testModel();
});

async function  logProrgess(epoch,logs){
    console.log("epoch :"+epoch+" , Loss:"+logs.loss);
    await tf.nextFrame();
}

function predict(){
    const input=tf.tensor2d([5.8,2.7,5.1,1.9],[1,4]);
    const prediction=model.predict(input);
    alert(prediction);
    const index=model.predict(input).argMax(-1).dataSync();
    alert(irisClasses[index]);
}

function testModel(){
    let xTest=xsTest.dataSync();
    let yTrue=ysTest.argMax(-1).dataSync();
    console.log("*********");
    console.log(yTrue);
    console.log("************")
    const predictions=model.predict(xsTest);
    const yPredict=predictions.argMax(-1).dataSync();
    let correct=0;
    let wrong=0;
    for (let i = 0; i < yTrue.length; i++) {
        if(yTrue[i]==yPredict[i]) {
            ++correct;
        } else {
            ++wrong;
        }
    }
    alert(100*correct/yTrue.length+" %");

}

