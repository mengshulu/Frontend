<template>
  <div class="main-content">
    <h1 class="title">
      前端面試題目
    </h1>
    <div class="nine-block normal">
      <div
        v-for="num in 9"
        :key="num"
        class="block"
      >
        <div class="box" />
        <template v-if="showBallBlocks.includes(num)">
          <div
            class="ball"
          >
            {{ num }}
          </div>
        </template>
      </div>
    </div>

    <h2>加分題(1)</h2>
    <div class="nine-block bonus">
      <div
        v-for="num in 9"
        :key="num"
        class="block"
      >
        <div class="box" />
      </div>
      <div
        v-for="num in 4"
        :key="num"
        :class="`ball-${num}`"
        class="ball"
      >
        {{ num }}
      </div>
    </div>
    <h2>加分題(2)</h2>
    <p>用迴圈產生 100顆球，計算每顆球的初始位置，操作 class name 來控制每顆球的可能的不同動畫效果和樣式。</p>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  const showBallBlocks:number[] = [1,3,7,9];

</script>

<style lang="scss">
@mixin nineBlock {
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(3, auto);
  width: fit-content;

  .ball {
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid #000;
    background-color: #A5F12B;
  }

  .box {
    width: 200px;
    height: 100px;
    border: black solid 2px;
    background: radial-gradient(circle, rgba(113,81,95,1) 81%, rgba(0,0,0,1) 100%);
  }

  .block {
    &:nth-child(3),&:nth-child(5),&:nth-child(9) {
      .box {
        animation: changeOpacity 1s ease-in-out 0s infinite;
      }
    }
  }
}

.main-content {
  width: fit-content;
  margin: auto;
}

.title {
  font-size: 20px;
}

.nine-block.normal {
  @include nineBlock();

  .ball {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ballMove01 5s ease-in-out 0s infinite;
  }
  
  .block {
    position: relative;

    &:nth-child(1),&:nth-child(3) {
      .ball {
        animation-name: ballMove02;
      }
    }
  }
}

.nine-block.bonus {
  @include nineBlock();
  position: relative;

  .ball {
    position: absolute;
    transform: translate(-50%, -50%);
    animation: ballMove03 3s ease-in-out 0s infinite;
    --top: 55px;
    --bottom: 290px;
    --left: 100px;
    --right: 540px;

    &-1 {
      top: var(--top);
      left: var(--left);
    }
    &-2 {
      top: var(--top);
      left: var(--right);
    }
    &-3 {
      top: var(--bottom);
      left: var(--left);
    }
    &-4 {
      top:  var(--bottom);
      left: var(--right);
    }
  }
  @keyframes ballMove03 {
    0% {
      // top: 0;
      // left: 0;
    }
    100% {
      position: absolute;
      top: calc(100% - 15px);
      left: calc(100% - 15px);
    }
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
