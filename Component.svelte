<script>
  import { register } from 'swiper/element/bundle';
  import 'swiper/css/bundle';

  register();

  const spaceBetween = 10;
  const onProgress = (e) => {
    const [swiper, progress] = e.detail;
    console.log(progress);
  };
  const onSlideChange = (e) => {
    console.log('slide changed');
  }

  export let imageURLs;

  let swiper;

  console.log("imageURLs length is: ", imageURLs.length);
  console.log("first slide is: ", imageURLs[0]);
  console.log("second slide is: ", imageURLs[1]);
</script>

<style>
  .navbuttons {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .navbuttons button {
    width: 100px;
    margin: 10px 10px;
  }
</style>

<swiper-container
  class-name={'main-swiper'}
  space-between={10}
  centered-slides={true}
  pagination={{
    type: 'bullets',
    clickable: 'true',
  }}
  allow-slide-next={true}
  allow-slide-prev={true}
  auto-height={true}
  enabled={true}
  keyboard={{
    enabled: true,
    onlyInViewPort: false,
  }}
  slides-per-view={1}
  on:swiperprogress={onProgress}
  on:swiperslidechange={onSlideChange}
  bind:this={swiper}
  rewind={true}
>
  {#each imageURLs as imageURL}
  <swiper-slide><img src={imageURL} alt="img"></swiper-slide>
  {/each}

</swiper-container>

<div class="navbuttons">
  <button type="button" on:click={() => swiper.swiper.slidePrev()}>Previous</button>
  <button type=button on:click={() => swiper.swiper.slideNext()}>Next</button>
</div>