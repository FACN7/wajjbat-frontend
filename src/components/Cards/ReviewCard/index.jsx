import React from 'react';
import { Rating } from '@material-ui/lab';
import style from './ReviewCard.module.scss';

export default (props) => (
    <div className={style['review-card']}>
        <div className={style['upper-review-card']}>
            <div className={style['profile-details']}>
                <img className={style['profile-image']} src={props.profile_image} alt="" />
                <span className={style['profile-fullname']}>{props.fullname}</span>
            </div>
            {console.log(props)}
            <span>{props.dateCreated}</span>
        </div>
        <div className={style['middle-review-card']}>
            {props.review_body}
        </div>
        <div className={style['lower-review-card']}>
            <Rating
                name="half-rating"
                value={props.rating}
                precision={0.5}
                readOnly
                size="small"
            />
        </div>
    </div>
)
