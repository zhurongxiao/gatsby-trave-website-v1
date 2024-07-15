// 导入styled-components库，用于创建样式化的React组件
import styled from 'styled-components';
// 导入Gatsby框架的Link组件，用于创建站点内的链接
import { Link } from 'gatsby';
// 导入DiScala图标组件，用于显示特定的图标
import { DiScala } from 'react-icons/di';

// 定义FooterContainer组件，设置背景色和布局属性
export const FooterContainer = styled.div`
    background-color: #101522; // 背景颜色
    display: flex; // 使用Flex布局
    flex-direction: column; // 内容沿垂直方向排列
    justify-content: center; // 内容垂直居中
    align-items: center; // 内容水平居中
`;

// 定义SocialMedia组件，设置最大宽度和宽度属性
export const SocialMedia = styled.section`
    max-width: 1000px; // 最大宽度限制
    width: 100%; // 宽度占满父容器
`;

// 定义SocialMediaWrap组件，设置Flex布局和响应式设计
export const SocialMediaWrap = styled.div`
    display: flex; // 使用Flex布局
    justify-content: space-between; // 内容沿主轴两端对齐
    align-items: center; // 内容垂直居中
    width: 90%; // 宽度占90%
    max-width: 1000px; // 最大宽度限制
    margin: 20px auto; // 上下外边距20px，左右自动居中
    @media screen and (max-width: 820px) { // 媒体查询，当屏幕宽度小于等于820px时
        flex-direction: column; // 内容沿垂直方向排列
    }
`;

// 定义SocialLogo组件，设置颜色、样式和行为属性
export const SocialLogo = styled(Link)`
    color: #fff; // 文本颜色为白色
    justify-self: start; // 自身在Flex布局中的对齐方式为起始位置
    cursor: pointer; // 鼠标悬停时显示手形指针
    text-decoration: none; // 移除下划线装饰
    font-size: 2rem; // 字体大小
    display: flex; // 使用Flex布局
    align-items: center; // 内容垂直居中
    margin-bottom: 16px; // 底部外边距
`;

// 定义SocialIcon组件，设置右侧内边距属性
export const SocialIcon = styled(DiScala)`
    margin-right: 10px; // 右侧内边距
`;

// 定义WebsiteRights组件，设置颜色、底部内边距和字体家族属性
export const WebsiteRights = styled.small`
    color: #fff; // 文本颜色为白色
    margin-bottom: 16px; // 底部内边距
    font-family: "Ubuntu", sans-serif; // 字体家族
`;

// 定义SocialIcons组件，设置Flex布局和宽度属性
export const SocialIcons = styled.div`
    display: flex; // 使用Flex布局
    justify-content: space-between; // 内容沿主轴两端对齐
    align-items: center; // 内容垂直居中
    width: 240px; // 宽度固定
`;

// 定义SocialIconLink组件，设置颜色和字体大小属性
export const SocialIconLink = styled.a`
    color: #fff; // 文本颜色为白色
    font-size: 24px; // 字体大小
`;