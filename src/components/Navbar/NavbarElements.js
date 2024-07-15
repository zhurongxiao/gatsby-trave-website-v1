// 导入styled-components库，用于创建具有内联样式的React组件
import styled from 'styled-components';

// 导入DiScala图标组件，来自react-icons库中的Di子库
import { DiScala } from 'react-icons/di';

// 导入Link组件，来自gatsby库，用于创建链接
import { Link } from 'gatsby';

// 定义Nav组件的样式，这是一个导航栏
export const Nav = styled.nav`
    background: ${({ active }) => active ? '#fff' : 'linear-gradient(to bottom,rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 100% )'}; /* 根据active属性的布尔值，设置背景颜色 */
    height: 80px; /* 设置导航栏的高度 */
    display: flex; /* 设置flex布局 */
    justify-content: center; /* 内容居中 */
    align-items: center; /* 内容居中 */
    font-size: 1rem; /* 设置字体大小 */
    position: sticky; /* 设置sticky定位 */
    top: 0; /* 设置导航栏在顶部的位置 */
    z-index: 999; /* 设置z-index */

    /* 媒体查询，当屏幕宽度小于等于960px时应用以下样式 */
    @media screen and (max-width: 960px) {
        background: ${({ click }) => (click ? '#fff' : 'transparent')}; /* 根据click属性的布尔值，设置背景颜色 */
        transition: 0.8s all ease; /* 添加过渡动画 */
    }
`;

// 定义NavbarContainer组件的样式，这是导航栏内部的容器
export const NavbarContainer = styled.div`
    display: flex; /* 设置flex布局 */
    justify-content: space-between; /* 内容两端对齐 */
    height: 80px; /* 设置高度与Nav组件相同 */
    z-index: 1; /* 设置z-index */
    width: 100%; /* 设置宽度为100% */
    max-width: 1000px; /* 最大宽度为1000px */
`;

// 定义NavLogo组件的样式，这是导航栏的logo
export const NavLogo = styled(Link)`
    color: #141414; /* 设置文本颜色 */
    cursor: pointer; /* 设置cursor为pointer */
    text-decoration: none; /* 移除下划线 */
    font-size: 1.5rem; /* 设置字体大小 */
    display: flex; /* 设置flex布局 */
    align-items: center; /* 垂直居中 */
`;

// 定义NavIcon组件的样式，这是导航栏的图标
export const NavIcon = styled(DiScala)`
    margin: 0 0.5rem 0 2rem; /* 设置图标的左右边距 */
`;

// 定义MobileIcon组件的样式，这是移动设备上的菜单图标
export const MobileIcon = styled.div`
    display: none; /* 默认情况下隐藏 */

    /* 媒体查询，当屏幕宽度小于等于960px时应用以下样式 */
    @media screen and (max-width: 960px) {
        display: block; /* 显示为block */
        position: absolute; /* 设置绝对定位 */
        top: 0; /* 设置图标在右上角 */
        right: 0; /* 设置图标在右上角 */
        transform: translate(-100%, 60%); /* 向左和向下偏移 */
        font-size: 1.8rem; /* 设置图标大小 */
        cursor: pointer; /* 设置cursor为pointer */
    }
`;

// 定义NavMenu组件的样式，这是导航菜单
export const NavMenu = styled.ul`
    display: flex; /* 设置flex布局 */
    align-items: center; /* 菜单项垂直居中 */
    list-style: none; /* 移除列表项的默认样式 */
    text-align: center; /* 设置文本居中 */

    /* 媒体查询，当屏幕宽度小于等于960px时应用以下样式 */
    @media screen and (max-width: 960px) {
        display: flex; /* 改变布局方向为column */
        flex-direction: column; /* 菜单项垂直排列 */
        width: 100%; /* 设置宽度为100% */
        height: 90vh; /* 设置高度为90%的视口高度 */
        position: absolute; /* 设置绝对定位 */
        top: ${({ click }) => (click ? '100%' : '-1000px')}; /* 根据click属性的布尔值，设置菜单的top位置 */
        opacity: 1; /* 设置透明度 */
        transition: all 0.2s ease; /* 添加过渡动画 */
        background: #fff; /* 设置背景颜色 */
    }
`;

// 定义NavItem组件的样式，这是菜单项
export const NavItem = styled.li`
    height: 80px; /* 设置高度与Nav组件相同 */

    /* 媒体查询，当屏幕宽度小于等于960px时应用以下样式 */
    @media screen and (max-width: 960px) {
        width: 100%; /* 设置宽度为100% */
    }
`;

// 定义NavLinks组件的样式，这是菜单项的链接
export const NavLinks = styled(Link)`
    color: #141414; /* 设置文本颜色 */
    display: flex; /* 设置flex布局 */
    align-items: center; /* 垂直居中 */
    text-decoration: none; /* 移除下划线 */
    padding: 0.5rem 1rem; /* 设置padding */
    height: 100%; /* 设置高度与Nav组件相同 */
    font-family: "Ubuntu", sans-serif; /* 设置字体家族 */

    /* 媒体查询，当屏幕宽度小于等于960px时应用以下样式 */
    @media screen and (max-width: 960px) {
        text-align: center; /* 设置文本居中 */
        padding: 2rem; /* 设置更大的padding */
        width: 100%; /* 设置宽度为100% */
        display: table; /* 设置display为table */

        /* 当鼠标悬停时，改变文本颜色 */
        &:hover {
            color: #ff4040; /* 改变文本颜色 */
            transition: all 0.3s ease; /* 添加过渡动画 */
        }
    }
`;