<template>
  <div class="main-content">
    <h1 class="title">
      前端面試題目
    </h1>
    <div class="nine-block">
      <div
        v-for="num in 9"
        :key="num"
        class="block"
      >
        <div class="box" />
        <div
          v-if="showBallBlocks.includes(num)"
          class="ball"
        >
          {{ num }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const showBallBlocks:number[] = [1,3,7,9];
</script>

<style lang="scss">
@mixin box {
  width: 200px;
  height: 100px;
  border: black solid 2px;
  background: radial-gradient(circle, rgba(113,81,95,1) 81%, rgba(0,0,0,1) 100%);
}

@mixin ball() {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #000;
  background-color: #A5F12B;
  animation: ballMove01 5s ease-in-out 0s infinite;
}

.main-content {
  width: 960px;
  margin: auto;
}

.title {
  font-size: 20px;
}

.nine-block {
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(3, auto);
  width: fit-content;
  
  .block {
    position: relative;
    .box {
      @include box();
    }

    &:nth-child(3),&:nth-child(5),&:nth-child(9) {
      .box {
        animation: changeOpacity 1s ease-in-out 0s infinite;
      }
    }

    &:nth-child(1),&:nth-child(3) {
      .ball {
        animation-name: ballMove02;
      }
    }
  }

  .ball {
    @include ball();
  }
}

@keyframes changeOpacity {
  0% {
    opacity: .6;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: .6;
  }
}

@keyframes ballMove01 {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(calc(-50% + 500px), -50%) rotate(360deg);
  }
}

@keyframes ballMove02 {
  0% {
    left: 50%;
  }
  100% {
    left: calc(50% + 500px);
  }
}
</style>
