
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        like: 0,
        dislike: 0,
        totalRatings: 0,
        likesPercent: 0,
        dislikesPercent: 0,
        handleLike:() => {
            this.setState(currentState => ({
                like: currentState.like + 1,
                totalRatings: currentState.totalRatings + 1,
            }));
            if (this.totalRatings !=0 && this.like !=0) {
                this.setState((prevSt) => ({
                    likesPercent: Math.round((prevSt.like/prevSt.totalRatings)*100),
                }));
            };
            if (this.totalRatings !=0 && this.dislike !=0) {
                this.setState((prevSt) => ({
                    dislikesPercent: Math.round((prevSt.dislike/prevSt.totalRatings)*100),
                }));
            };
        },

        handleDislike:() => {
            this.setState((prevState) => ({
                dislike: prevState.dislike + 1,
                totalRatings: prevState.totalRatings + 1
            }));
            if (this.totalRatings !=0 && this.like !=0) {
                this.setState((prevSt) => ({
                    likesPercent: Math.round((prevSt.like/prevSt.totalRatings)*100),
                }));
            };
            if (this.totalRatings !=0 && this.dislike !=0) {
                this.setState((prevSt) => ({
                    dislikesPercent: Math.round((prevSt.dislike/prevSt.totalRatings)*100),
                }));
            };
        }
    };
  }
  render() {
    return (
     <>
        <div className='content-rating'>
            <p>
                Do you like Cars?
            </p>
            <div className='rating-buttons'>
                <button className="like-button" onClick={this.state.handleLike}>
                    Like ({this.state.like})
                </button>
                <button className="dislike-button" onClick={this.state.handleDislike}>
                    Dislike ({this.state.dislike})
                </button>
            </div>
            <h2>Total Rating {this.state.totalRatings}</h2>
            <div>
                <table border={2}>
                    <tr>
                        <td style={{padding:"0.5rem"}}>Likes Percentage %</td>
                        <td style={{padding:"0.5rem"}}>Dislikes Percentage %</td>
                    </tr>
                    <tr>
                        <td style={{padding:"0.5rem"}}>{this.state.likesPercent}%</td>
                        <td style={{padding:"0.5rem"}}>{this.state.dislikesPercent}%</td>
                    </tr>
                </table>
            </div>
        </div>
     </>
    );
  }
}

export default ContentRating;
