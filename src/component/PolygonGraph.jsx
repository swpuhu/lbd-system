import React from 'react';

class PolygonGraph extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      data: this.props.data
    }
    this.offset = 20;
    this.width = this.props.width;
    this.height = this.props.height;
    this.xMax = this.state.data[0].x;
    this.xMin = this.state.data[0].x;
    this.state.data.forEach(item => {
      if (item.x > this.xMax) {
        this.xMax = item.x
      }
      if (item.x < this.xMin) {
        this.xMin = item.x;
      }
    });
    this.xScale = (this.props.width - 3 * this.offset) / (this.xMax - this.xMin);
    console.log(this.xScale);
  }
  componentDidMount () {

  }
  mouseDownCircle(index, e) {
    let ele = e.target;
    let self = this;
    function move(ev) {
      self.setState(state => {
        state.data[index].x += (ev.movementX / self.xScale);
        state.data[index].y -= ev.movementY;
        return state;
      })
    }
    function up (e) {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('up', up);
    }
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);
  }
  render() {

    let obj = this.state.data.map((item, index, self) => {
      let o = {};
      o.circle =
      <circle
      cx={(item.x * this.xScale + this.offset)}
      cy={this.height - item.y - this.offset}
      r="3"
      key={index}
      onMouseDown={this.mouseDownCircle.bind(this, index)}
      ></circle>
      if (index !== self.length - 1) {
        o.line =
        <line
        x1={(item.x * this.xScale + this.offset)}
        y1={this.height - item.y - this.offset}
        x2={self[index + 1].x * this.xScale + this.offset}
        y2={this.height - self[index + 1].y - this.offset}
        key={index}
        style={{
          stroke: this.props.stroke,
          strokeWidth: this.props.strokeWidth
        }}></line>
      }
      return o;
    });
    return (
      <div style={{position: "relative", width: this.props.width, height: this.props.height}}>
        <svg style={{position: "absolute", zIndex: 0}} width={this.props.width} height={this.props.height}>
          <g style={{stroke: this.props.stroke}} strokeWidth={this.props.strokeWidth}>
            <line x1={this.offset} y1={this.props.height - this.offset} x2={this.offset} y2={this.offset}></line>
            <line x1={this.offset} y1={this.props.height - this.offset} x2={this.props.width - this.offset} y2={this.props.height - this.offset}></line>
          </g>
        </svg>
        <svg style={{position: "absolute", zIndex: 1}} width={this.props.width} height={this.props.height}>
          <g style={{fill: this.props.fill}}>
            {obj.map(item => item.circle)}
            {obj.map(item => item.line)}
          </g>
        </svg>
      </div>
    )
  }
}

PolygonGraph.defaultProps = {
  width: 640,
  height: 360,
  stroke: '#4269c1',
  fill: '#4269cc',
  strokeWidth: 2,
  data: [
    {
      x: 10,
      y: 200
    },
    {
      x: 20,
      y: 300
    },
    {
      x: 50,
      y: 100
    },
    {
      x: 100,
      y: 10
    },
    {
      x: 200,
      y: 280
    },
    {
      x: 300,
      y: 150
    },
    {
      x: 380,
      y: 320
    }
  ]
}

export default PolygonGraph;