// 导入styled-components库，用于创建带有内联样式的React组件
import styled from "styled-components";

// 使用styled-components定义Button组件，基于原生的button元素
export const Button = styled.button`
    // 设置按钮的圆角
    border-radius: 4px;
    // 根据primary属性的值设置背景色
    background: ${({ primary }) => (primary ? "#FF4040" : "#0467FB")};
    // 禁止文字换行
    white-space: nowrap;
    // 根据big属性的值设置内边距
    padding: ${({ big }) => (big ? "16px 64px" : "10px 20px")};
    // 设置文本颜色
    color: #fff;
    // 根据fontBig属性的值设置字体大小
    font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
    // 移除默认的轮廓线
    outline: none;
    // 移除边框
    border: none;
    // 设置光标为手形，表示可点击
    cursor: pointer;
    // 设置字体
    font-family: "Ubuntu", sans-serif;

    // 当鼠标悬停在按钮上时的样式
    &:hover {
        // 设置过渡效果，所有属性变化在0.3秒内平滑完成
        transition: all 0.3s ease-out;
        // 根据primary属性的值改变背景色
        background: ${({ primary }) => (primary ? "#0467FB" : "#FF4040")};
    }

    // 媒体查询，当屏幕宽度小于等于960px时应用以下样式
    @media screen and (max-width: 960px) {
        // 设置按钮宽度为100%，使其占据整个容器的宽度
        width: 100%;
    }
`;