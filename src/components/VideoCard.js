import React, { useState } from 'react';
import { Link } from 'gatsby';
import ModalVideo from 'react-modal-video';
import { Container } from 'react-bootstrap';
import bgImage from '../assets/images/backgrounds/video-bg.jpg';

const VideoCard = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className='video-card'>
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='ZshZ2JMWfBM'
        onClose={() => setOpen(false)}
      />
      <div
        className='video-card__bg'
        style={{ backgroundImage: `url(${bgImage})` }}></div>

      <Container className='text-center pt-120 pb-120'>
        <h3>Video by Nora Doyle</h3>
        <p>
          SAAS operates in Kongowea, an area of Mombasa, Kenya. Nora Doyle
          created this video that captures the spirit of the people of Kongowea
          who we aim to help.
        </p>
        <div className='video-card__btn-block'>
          <Link to='/cause-details' className='thm-btn rounded-pill'>
            Start Donating
          </Link>

          <span
            onClick={() => setOpen(true)}
            onKeyDown={() => setOpen(true)}
            className='video-popup video-card__btn'
            role='button'
            tabIndex={0}>
            <i className='fa fa-play'></i>
          </span>
        </div>
      </Container>
    </section>
  );
};

export default VideoCard;
