import React from 'react';

function Story(props) {
  return (
    <section className='story'>
      <div>
        <img src={`${process.env.PUBLIC_URL}/images/story.png`} alt='스토리강아지' />
      </div>

      <h2>
        지니펫 <span>스토리</span>
      </h2>

      <p className='story_txt'>소중한 반려견을 위한<br />지니펫의 다양한 소식을 만나보세요!</p>
      <p className='now_btn'>
        자세히 보기
      </p>

    <img src={`${process.env.PUBLIC_URL}/images/banner_story_img.png`} alt='스토리 강아지배너' className='story_banner'/>
    </section>
  );
}

export default Story;