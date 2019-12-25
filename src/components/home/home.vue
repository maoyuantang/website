<!--
 * @Author: tmy
 * @Date: 2019-12-04 16:17:54
 * @LastEditors  : tmy
 * @LastEditTime : 2019-12-25 15:34:22
 * @Description: Do not edit
 -->
<template>
    <div class="homeCont">
        <div class="home_content">
            <div
                :class="['home_video_box',`${isVideo?'back':''}`]"
                @mouseover="mouseoverFun"
            >
                <video
                    name="media"
                    src="http://pm.mrkjvip.cn/www/v.mp4"
                    autoplay="autoplay"
                    preload="load"
                    loop="loop"
                    muted="muted"
                    width="100%"
                >
                </video>

                <div
                    :class="['home_video_back',`${isVideo?'front':''}`]"
                    @mouseout="mouseoutFun"
                >
                </div>

                <img
                    @click="playVideo"
                    :class="['isPlay',`${isVideo?'showPlay':'hidePlay'}`]"
                    src="../../assets/img/play.png"
                    alt="视频播放按钮"
                >
            </div>
        </div>
        <HomeVideo
            :isShow="showVideo"
            @par="closeVideo"
        ></HomeVideo>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import HomeVideo from '@/components/home/HomeVideo.vue';

@Component({
    name: 'HomeVideo',
    components: {
        HomeVideo,
    },
})
export default class Home extends Vue {
    // 播放按钮是否显示
    private isVideo: boolean = false;

    // 视频弹窗是否显示
    private showVideo: boolean = false;

    // 移入video
    private mouseoverFun() {
        this.isVideo = true;
    }

    // 移出待播放层
    private mouseoutFun() {
        this.isVideo = false;
    }

    // 关闭视频弹窗
    private closeVideo() {
        this.showVideo = false;
    }

    // 开启视频弹窗
    private playVideo() {
        this.showVideo = true;
    }
}
</script>

<style lang="scss" scoped>
.back {
    z-index: 0;
}
.front {
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.6);
}
.hidePlay {
    visibility: hidden;
}
.showPlay {
    visibility: initial;
}
.homeCont {
    .home_content {
        margin: 100px 0 0 0;
        width: 100%;
        position: relative;
        .home_video_box {
            width: 100%;
            position: relative;
            .home_video_back {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .isPlay {
                width: 86px;
                height: 86px;
                cursor: pointer;
                position: absolute;
                left: 50%;
                top: 50%;
                margin: -43px 0 0 -43px;
                z-index: 1;
            }
        }
    }
}
</style>
