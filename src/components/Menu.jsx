import { MenuLayout } from "../styles/LayoutStyles";

export default function Menu() {
  return(
    <MenuLayout className="menu">
      <span className="menu--title">Latest Issues</span>
      <div className="menu--actions">
        <button className="menu--button">List</button>
        <button className="menu--button">Grid</button>
      </div>
    </MenuLayout>
  )
}