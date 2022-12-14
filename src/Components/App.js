import React from 'react';
import PhotoWall from './PhotoWall';
import Title from './Title';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: '0',
          description: 'beautiful landscape',
          imageLink:
            'https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg' +
            '3919321_1443393332_n.jpg',
        },
        {
          id: '1',
          description: 'Aliens???',
          imageLink:
            'https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg',
        },
        {
          id: '5',
          description: 'Aliens???',
          imageLink:
            'https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg',
        },
        {
          id: '6',
          description: 'Aliens???',
          imageLink:
            'https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg',
        },
        {
          id: '2',
          description: 'On a vacation!',
          imageLink:
            'https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg',
        },
      ],
    };
    this.remove = this.remove.bind(this);
  }
  remove(description) {
    console.log(description);
    this.setState((state) => ({
      posts: state.posts.filter((item) => item.description !== description),
    }));
  }
  render() {
    return (
      <div>
        <Title title="Photowall" />
        <PhotoWall posts={this.state.posts} rem={this.remove} />
      </div>
    );
  }
}
export default App;
//render component is dom
