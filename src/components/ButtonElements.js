import styled from "styled-components";

// 使用styled-components定义Button组件，基于原生的button元素
export const Button = styled.button`
    border-radius: 4px; // 设置按钮的圆角
    background: ${({ primary }) => (primary ? "#FF4040" : "#0467FB")}; // 根据primary属性的值设置背景色
    white-space: nowrap; // 禁止文字换行
    padding: ${({ big }) => (big ? "16px 64px" : "10px 20px")}; // 根据big属性的值设置内边距
    color: #fff; // 设置文本颜色
    font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")}; // 根据fontBig属性的值设置字体大小
    outline: none; // 移除默认的轮廓线
    border: none; // 移除边框
    cursor: pointer; // 设置光标为手形，表示可点击
    font-family: "Ubuntu", sans-serif; // 设置字体

    &:hover { // 当鼠标悬停在按钮上时的样式
        transition: all 0.3s ease-out; // 设置过渡效果，所有属性变化在0.3秒内平滑完成
        background: ${({ primary }) => (primary ? "#0467FB" : "#FF4040")}; // 根据primary属性的值改变背景色
    }

    @media screen and (max-width: 960px) { // 媒体查询，当屏幕宽度小于等于960px时应用以下样式
        width: 100%; // 设置按钮宽度为100%，使其占据整个容器的宽度
    }
`;