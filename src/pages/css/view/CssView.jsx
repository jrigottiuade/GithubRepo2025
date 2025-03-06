import React from 'react'
import { useCssComponents } from '../hook/useCssComponents';
import SidebarLayout from '../../../core/layout/SidebarLayout';

const CssView = () => {
  const {cssSelectedComponent, setCssSelectedComponent, cssComponents} = useCssComponents();

  return <SidebarLayout 
  selectedComponent={cssSelectedComponent}
  setSelectedComponent={setCssSelectedComponent}
  components={cssComponents}
  ></SidebarLayout>;
}

export default CssView
