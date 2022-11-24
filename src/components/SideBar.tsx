import React from "react";
import styled from "styled-components";
import {Checkbox, Collapse} from 'antd';

const { Panel } = Collapse;

export const SiderContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #EDEDED;
  border-radius: 5px;
`

export const SideBar: React.FC<any> = props => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <>
      <SiderContainer>
        <Collapse onChange={onChange}>
          <Panel header="Nationality" key="1">
            <p>qwe</p>
          </Panel>
          <Panel header="Leagues" key="2">
            <p>{'bruh1'}</p>
          </Panel>
          <Panel header="Teams" key="3">
            <p>{'bruh2'}</p>
          </Panel>
        </Collapse>
      </SiderContainer>
    </>
  );
};