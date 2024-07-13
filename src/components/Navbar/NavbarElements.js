// 导入styled-components库，用于创建具有内联样式的React组件
import styled from "styled-components"

// 导入DiScala图标组件，来自react-icons库中的Di子库
import { DiScala } from "react-icons/di";

// 导入Link组件，来自gatsby库，用于创建链接
import { Link } from "gatsby"

// 定义Nav组件的样式，这是一个导航栏
export const Nav = styled.nav`
    // 根据active属性的布尔值，设置背景颜色
    background: ${({ active }) => active ? "#fff" : "linear-gradient(to bottom,rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 100% )"};
    // 设置导航栏的高度
    height: 80px;  
    // 设置flex布局，使内容居中
    display: flex;
    justify-content: center;
    align-items: center;
    // 设置字体大小
    font-size: 1rem;
    // 设置sticky定位，使其在滚动时保持在顶部
    position: sticky;
    // 设置导航栏在顶部的位置
    top: 0;
    // 设置z-index，保证导航栏在页面最前端显示
    z-index: 999;  

    // 媒体查询，当屏幕宽度小于等于960px时应用以下样式
    @media screen and (max-width: 960px) {
        // 根据click属性的布尔值，设置背景颜色
        background: ${({ click }) => (click ? "#fff" : "transparent")};
        // 添加过渡动画，当背景颜色改变时平滑过渡
        transition: 0.8s all ease;
    }
`

// 定义NavbarContainer组件的样式，这是导航栏内部的容器
export const NavbarContainer = styled.div`
    // 设置flex布局
    display: flex;
    // 内容两端对齐
    justify-content: space-between;
    // 设置高度与Nav组件相同
    height: 80px;
    // 设置z-index，保证容器在页面适当位置显示
    z-index: 1;
    // 设置宽度为100%，最大宽度为1000px
    width: 100%;
    max-width: 1000px;
`

// 定义NavLogo组件的样式，这是导航栏的logo
export const NavLogo = styled(Link)`
    // 设置文本颜色
    color: #141414;
    // 设置cursor为pointer，鼠标悬停时显示手形
    cursor: pointer;
    // 移除下划线
    text-decoration: none;
    // 设置字体大小
    font-size: 1.5rem;
    // 设置flex布局，并垂直居中
    display: flex;
    align-items: center;
`

// 定义NavIcon组件的样式，这是导航栏的图标
export const NavIcon = styled(DiScala)`
    // 设置图标的左右边距
    margin: 0 0.5rem 0 2rem;
`

// 定义MobileIcon组件的样式，这是移动设备上的菜单图标
export const MobileIcon = styled.div`
    // 默认情况下隐藏
    display: none;
    
    // 媒体查询，当屏幕宽度小于等于960px时应用以下样式
    @media screen and (max-width: 960px) {
        // 显示为block
        display: block;
        // 设置绝对定位
        position: absolute;
        // 设置图标在右上角，但向左和向下偏移
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        // 设置图标大小
        font-size: 1.8rem;
        // 设置cursor为pointer，鼠标悬停时显示手形
        cursor: pointer;
    }
`

// 定义NavMenu组件的样式，这是导航菜单
export const NavMenu = styled.ul`
    // 设置flex布局
    display: flex;
    // 设置align-items为center，使菜单项垂直居中
    align-items: center;
    // 设置list-style为none，移除列表项的默认样式
    list-style: none;
    // 设置文本居中
    text-align: center;

    // 媒体查询，当屏幕宽度小于等于960px时应用以下样式
    @media screen and (max-width: 960px) {
        // 改变布局方向为column，使菜单项垂直排列
        display: flex;
        flex-direction: column;
        // 设置宽度为100%
        width: 100%;
        // 设置高度为90%的视口高度
        height: 90vh;
        // 设置绝对定位
        position: absolute;
        // 根据click属性的布尔值，设置菜单的top位置
        top: ${({ click }) => (click ? "100%" : "-1000px")};
        // 设置透明度
        opacity: 1;
        // 添加过渡动画
        transition: all 0.2s ease;
        // 设置背景颜色
        background: #fff;
    }
`

// 定义NavItem组件的样式，这是菜单项
export const NavItem = styled.li`
    // 设置高度与Nav组件相同
    height: 80px;

    // 媒体查询，当屏幕宽度小于等于960px时应用以下样式
    @media screen and (max-width: 960px) {
        // 设置宽度为100%
        width: 100%;
    }
`

// 定义NavLinks组件的样式，这是菜单项的链接
export const NavLinks = styled(Link)`
    // 设置文本颜色
    color: #141414;
    // 设置flex布局，并垂直居中
    display: flex;
    align-items: center;
    // 移除下划线
    text-decoration: none;
    // 设置padding
    padding: 0.5rem 1rem;
    // 设置高度与Nav组件相同
    height: 100%;
    // 设置字体家族
    font-family: "Ubuntu", sans-serif;

    // 媒体查询，当屏幕宽度小于等于960px时应用以下样式
    @media screen and (max-width: 960px) {
        // 设置文本居中
        text-align: center;
        // 设置更大的padding
        padding: 2rem;
        // 设置宽度为100%
        width: 100%;
        // 设置display为table，使链接占据整行
        display: table;

        // 当鼠标悬停时，改变文本颜色
        &:hover {
            color: #ff4040;
            // 添加过渡动画
            transition: all 0.3s ease;
        }
    }
`