import {Layout} from "antd";
import {Content, Footer} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import styled from "styled-components";
import {SideBar} from "../../components/SideBar";

export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  padding: 0 3em;
`

export const FilterPage: React.FC<any> = props => {
  return (
    <>
      <PageContainer>
        <Layout style={{height: 'calc(100vh - 3em)'}}>
          <Layout>
            <Content style={{backgroundColor: "white"}}>Content</Content>
            <Sider width={'300px'} style={{backgroundColor: "white"}}>
              <SideBar />
            </Sider>
          </Layout>
        </Layout>
      </PageContainer>
    </>
  );
};