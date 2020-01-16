import React, { useEffect, useState } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { FormattedMessage, injectIntl } from 'react-intl';
import axios from 'axios';
import { Rating } from '@material-ui/lab';

import './styles.scss';
import ReviewCard from 'components/Cards/ReviewCard';

function BusinessReviews(props) {
    const history = useHistory();

    const useStyles = makeStyles({
        root: {
            width: '80%',
            display: 'flex',
            alignSelf: 'center',
            margin: '5px',
            height: '7px',
        },
        barColorPrimary: { backgroundColor: '#16F4D0' },
        colorPrimary: { backgroundColor: '#21b5a2' },
    });

    const [isLoggedIn, setIsLoggedIn] = useState([false]);
    const [hasReviewed, setHasReviewed] = useState(false);
    const [startReviewForm, setStartReviewForm] = useState(false);
    const [reviewForm, setReviewForm] = useState({
        reviewBody: '',
        rating: 0,
    });

    const classes = useStyles();

    useEffect(() => {
        (async function fetchIsLoggedIn() {
            try {
                const { data } = await axios.get(
                    `${process.env.REACT_APP_API_URL}/api/isLoggedIn`,
                    {
                        withCredentials: true,
                    },
                );
                if (data.id) {
                    setIsLoggedIn([true, data.id]);

                    props.reviews.map((item) => {
                        if (item.id === data.id) {
                            setHasReviewed(true);
                        }
                    });
                }
            } catch (error) {
                console.log(error);
            }
        }());
    }, []);

    const handleReviews = () => {
        if (!props.reviews.length) {
            return '';
        }

        return props.reviews.map((currentReview) => (
            <ReviewCard
                rating={currentReview.rating}
                fullname={currentReview.fullname}
                profile_image={currentReview.profile_image}
                dateCreated={currentReview.dateCreated}
                review_body={currentReview.review_body}
            />
        ));
    };

    const submitForm = async () => {
        const newReview = {
            ...reviewForm,
            dateCreated: new Date().toLocaleDateString(),
            userId: isLoggedIn[1],
            businessId: props.businessData.id,
        };

        try {
            await axios.post(
                `${process.env.REACT_APP_API_URL}/api/new-review`,
                newReview,
                {
                    withCredentials: true,
                },
            );
            setStartReviewForm(false);
            setHasReviewed(true);
            props.refresh('go');
        } catch (err) {
            console.log(err);
        }
    };

    const submitText = props.intl.formatMessage({ id: 'Submit' });

    return (
        <div style={{ marginTop: '10px' }}>
            <h1 className="reviews-h1">
                <FormattedMessage id="Reviews" />
            </h1>
            <div className="rating-container">
                <p>5</p>
                <LinearProgress
                    classes={{
                        root: classes.root,
                        barColorPrimary: classes.barColorPrimary,
                        colorPrimary: classes.colorPrimary,
                    }}
                    variant="determinate"
                    value={50}
                />
            </div>
            <div className="rating-container">
                <p>4</p>
                <LinearProgress
                    classes={{
                        root: classes.root,
                        barColorPrimary: classes.barColorPrimary,
                        colorPrimary: classes.colorPrimary,
                    }}
                    variant="determinate"
                    value={50}
                />
            </div>
            <div className="rating-container">
                <p>3</p>
                <LinearProgress
                    classes={{
                        root: classes.root,
                        barColorPrimary: classes.barColorPrimary,
                        colorPrimary: classes.colorPrimary,
                    }}
                    variant="determinate"
                    value={50}
                />
            </div>
            <div className="rating-container">
                <p>2</p>
                <LinearProgress
                    classes={{
                        root: classes.root,
                        barColorPrimary: classes.barColorPrimary,
                        colorPrimary: classes.colorPrimary,
                    }}
                    variant="determinate"
                    value={50}
                />
            </div>
            <div
                className="rating-container"
                style={{ boxShadow: '0px 5px 10px -6px #508991' }}
            >
                <p>1</p>
                <LinearProgress
                    classes={{
                        root: classes.root,
                        barColorPrimary: classes.barColorPrimary,
                        colorPrimary: classes.colorPrimary,
                    }}
                    variant="determinate"
                    value={50}
                />
            </div>
            {!startReviewForm && !isLoggedIn[0] && (
                <div className="signin-card">
                    <span style={{ fontSize: '26px' }}>
                        <FormattedMessage id="Log in to submit a review" />
                    </span>
                    <button
                        onClick={() => history.push('/signin')}
                        className="submit-button"
                    >
                        <FormattedMessage id="signin" />
                    </button>
                </div>
            )}

            {!startReviewForm && !hasReviewed && isLoggedIn[0] && (
                <div className="signin-card">
                    <span style={{ fontSize: '26px' }}>
                        <FormattedMessage id="How was it ?" />
                    </span>
                    <button
                        className="submit-review-button"
                        onClick={() => setStartReviewForm(true)}
                    >
                        <FormattedMessage id="Submit a review" />
                    </button>
                </div>
            )}

            {startReviewForm && (
                <div className="signin-card">
                    <span style={{ fontSize: '25px', width: '100%' }}>
                        <FormattedMessage id="Submit a review" />
                    </span>

                    <textarea
                        className="large-input"
                        rows="4"
                        placeholder="Description"
                        name="description"
                        value={reviewForm.reviewBody}
                        onChange={({ target }) => setReviewForm({ ...reviewForm, reviewBody: target.value })}
                        required
                    />

                    <div>
                        <Rating
                            name="half-rating"
                            size="large"
                            value={reviewForm.rating}
                            onChange={(event, value) => setReviewForm({ ...reviewForm, rating: value })}
                        />
                    </div>

                    <div>
                        <input
                            onClick={submitForm}
                            type="button"
                            value={submitText}
                            className="submit-button"
                        />
                    </div>
                </div>
            )}
            <div>{handleReviews()}</div>
        </div>
    );
}

export default injectIntl(BusinessReviews);
