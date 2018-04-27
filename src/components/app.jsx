import React from 'react';
import anime from 'animejs';

import Theme from '../contexts/theme';
import Mouse from './mouse';

const stateStyle = {
  height: '50px',
  width: '50px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '100%',
  backgroundColor: '#FFF'
};

const spanStyle = { fontSize: '1.75em' };

const progressStyle = {
  backgroundColor: 'white',
  height: '25px',
  width: '75px',
  marginTop: '12px'
};

const inProgressStyle = {
  backgroundColor: 'grey',
  width: '0',
  height: '100%'
};

class App extends React.PureComponent {
  componentDidMount() {
    this.progress = anime({
      targets: '.in-progress',
      // duration: 10000,
      width: ['0', '100%'],
      autoplay: false
    });

    this.states = [
      anime({
        targets: '.state-1',
        // duration: 5000,
        backgroundColor: ['#FFF', '#000'],
        autoplay: false
      }),
      anime({
        targets: '.state-2',
        duration: 10000,
        backgroundColor: ['#FFF', '#000'],
        autoplay: false
      })
    ];
  }

  onClick = async (index) => {
    this.states[index].play();
    await this.states[index].finished;
    console.log(`state-${index} completed`);
    this.progress.play();
  };

  progress = null;
  states = null;

  render() {
    return (
      <Theme>
        <Mouse id="app">
          {() => (
            <div className="container">
              <div
                className="row"
                style={{ display: 'flex', alignContent: 'space-between', height: '10vh' }}
              >
                {/* <div
                  role="presentation"
                  className="state-1"
                  style={stateStyle}
                  onClick={() => this.onClick(0)}
                >
                  <span style={spanStyle}>1</span>
                </div>
                <div className="progress bar" style={progressStyle}>
                  <div className="in-progress bar" style={inProgressStyle} />
                </div>
                <div
                  role="presentation"
                  className="state-2"
                  style={stateStyle}
                  onClick={() => this.onClick(1)}
                >
                  <span style={spanStyle}>2</span>
                </div> */}
              </div>
            </div>
          )}
        </Mouse>
      </Theme>
    );
  }
}

export default App;
