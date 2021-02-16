import React, { Component } from 'react';
import useImage from 'use-image';
import { render } from "react-dom";
import { Stage, Layer, Image, Rect, Transformer, Text } from "react-konva";
import back from '../Image/back.jpg';
import canImg from '../Image/WD_Bhavik.jpeg';
import image3 from '../Image/bossbaby.jpeg';
import image4 from '../Image/groot.jpeg';

const CanvasThought = ({ x, y, color, fontSize, fontFamily, text }) => (

    < Text
        name="CanvasThought"
        text={text}
        x={x}
        y={y}
        fontSize={fontSize}
        fontFamily={fontFamily}
        fill={color}
        width={300}
        padding={20}
        align={'center'}
        draggable
    />
);

const CanvasAuthor = ({ x, y, color, fontSize, fontFamily, text }) => (

    < Text
        name="CanvasAuthor"
        text={text}
        x={x}
        y={y}
        fontSize={fontSize}
        fontFamily={fontFamily}
        fill={color}
        width={300}
        padding={20}
        align={'center'}
        draggable
    />
);

class URLImage extends React.Component {
    state = {
        image: null
    };
    componentDidMount() {
        this.loadImage();
    }
    componentDidUpdate(oldProps) {
        if (oldProps.src !== this.props.src) {
            this.loadImage();
        }
    }
    componentWillUnmount() {
        this.image.removeEventListener('load', this.handleLoad);
    }
    loadImage() {
        // save to "this" to remove "load" handler on unmount
        this.image = new window.Image();
        this.image.src = this.props.src;
        this.image.addEventListener('load', this.handleLoad);
    }
    handleLoad = () => {
        // after setState react-konva will update canvas and redraw the layer
        // because "image" property is changed
        this.setState({
            image: this.image
        });
        // if you keep same image object during source updates
        // you will have to update layer manually:
        // this.imageNode.getLayer().batchDraw();
    };
    render() {
        return (
            <Image
                x={this.props.x}
                y={this.props.y}
                width={this.props.width}
                height={this.props.height}
                image={this.state.image}
                ref={node => {
                    this.imageNode = node;
                }}
            />
        );
    }
}


class TransformerComponent extends React.Component {
    componentDidMount() {
        this.checkNode();
    }
    componentDidUpdate() {
        this.checkNode();
    }
    checkNode() {
        const stage = this.transformer.getStage();
        const { selectedShapeName } = this.props;
        const selectedNode = stage.findOne("." + selectedShapeName);
        if (selectedNode === this.transformer.node()) {
            return;
        }
        if (selectedNode) {
            this.transformer.attachTo(selectedNode);
        } else {
            this.transformer.detach();
        }
        this.transformer.getLayer().batchDraw();
    }
    render() {
        return (
            <Transformer
                ref={node => {
                    this.transformer = node;
                }}
            />
        );
    }
}
class Canvas extends Component {
    state = {
        image: null,
        selectedShapeName: "",
    };
    componentDidMount() {
        const image = new window.Image();

        image.onload = () => {
            this.setState(
                {
                    image
                },
                () => {
                    this.transformer.attachTo(this.image);
                }
            );
        };
        image.src = this.props.image;
        console.log(this.props.fontFamily)
    }
    handleTransform = () => {
        const props = {
            x: this.image.x(),
            y: this.image.y(),
            rotation: this.image.rotation(),
            width: this.image.width(),
            height: this.image.height(),
            scaleX: this.image.scaleX(),
            scaleY: this.image.scaleY()
        };

    };

    handleStageClick = e => {
        this.setState({
            selectedShapeName: e.target.name()
        });
    };
    render() {
        return (
            <div>

                <Stage width={window.innerWidth} height={window.innerHeight}>
                    <Layer>
                        <URLImage src={back} x={400} y={90} width={850} height={850} />
                        <Image
                            image={this.state.image}
                            ref={node => {
                                this.image = node;
                            }}
                            x={500}
                            y={50}
                            width={840}
                            height={840}
                            draggable
                            onTransform={this.handleTransform}
                            onDragMove={this.handleTransform}
                        />
                        <Transformer
                            ref={node => {
                                this.transformer = node;
                            }}
                        />
                    </Layer>

                    <Layer onClick={this.handleStageClick} >
                        <CanvasThought x={550} y={170} color={this.props.color} text={this.props.thought} author={this.props.author} fontFamily={this.props.fontFamily} fontSize={this.props.fontSize} />
                        <CanvasAuthor x={550} y={600} color={this.props.color} text={this.props.author} fontFamily={this.props.fontFamily} fontSize={this.props.fontSize} />

                        <TransformerComponent
                            selectedShapeName={this.state.selectedShapeName}
                        />
                    </Layer>
                </Stage>

            </div>
        );
    }
}




export default Canvas;