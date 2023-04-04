// Write your code here
import './index.css'

const tabItem = props => {
  const {tabListItem} = props
  const {tabId, displayText} = tabListItem
  return (
    <li className="tab-item-name">
      <button type="button">{displayText}</button>
    </li>
  )
}

export default tabItem
