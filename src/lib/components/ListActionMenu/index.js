import React from 'react'
import { Wrapper } from './style'
import ActionMenu from '../ActionMenu'

function ListActionMenu({ actionMenus }) {
  return (
    <Wrapper length={actionMenus.length}>
      {actionMenus.map((a, index) => (
        <ActionMenu
          key={index}
          backgroundColor={a.backgroundColor}
          shadowColor={a.shadowColor}
          src={a.src}
          lBackgroundColor={a.lBackgroundColor}
          color={a.color}
          lShadowColor={a.lShadowColor}
          borderColor={a.borderColor}
          children={a.children}
          sizeHeight={a.sizeHeight}
          sizeWidth={a.sizeWidth}
          onClick={a.onClick}
        />
      ))}
    </Wrapper>
  )
}

export default ListActionMenu
