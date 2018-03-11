<template>
<div >
    <div class="translator-title"> 转谱器</div>
   <Card class="translator">
   <Tabs value="directly">
            <TabPane label="直接转谱" name="directly">
                   <div class="button-bar1">
                 <Select v-model="ScaleSelet1" style="width:200px">
                  <Option v-for="item in Scale1" :value="item.value" :key="item.value">{{ item.text }}</Option>
                 </Select>
                  <Select v-model="ScaleSelet2" style="width:200px">
                    <Option v-for="item in Scale2" :value="item.value" :key="item.value">
                        {{item.text}}
                        </Option>
                 </Select>
                    <Button type="info">确定转换</Button>
                     <Button-group shape="circle">
        <Button type="ghost">#3</Button>
        <Button type="ghost">4</Button>
    </Button-group>
     <Button-group shape="circle">
        <Button type="ghost">#7</Button>
        <Button type="ghost">[1]</Button>
    </Button-group>
            </div>
            <Row>
            <Col span="10" offset="1">            
                <Input v-model="value1" type="textarea" :rows="18" placeholder="Enter something..."></Input>
             </Col>
             <Col span="10" offset="2">        
              <Input v-model="value2" type="textarea" :rows="18" placeholder="Enter something..."></Input>
            </Col>
            </Row>
         

        </TabPane>
        <TabPane label="逐步转谱" name="step">
        <Row>
        <Col span="10" offset="1">            
        <Input v-model="value3" type="textarea" :rows="18" placeholder="Enter something..."></Input>
        </Col>
        <Col span="10" offset="2">
        <Input v-model="value4" type="textarea" :rows="18" placeholder="Enter something..."></Input>
    </Col>
    </Row>

        </TabPane>
        <TabPane label="曲谱转换" name="turn">

          <Row>
          <br/>
        <Col span="10" offset="1">            
        <Input v-model="value5" type="textarea" :rows="18" placeholder="Enter something..."></Input>
        </Col>
        <Col span="10" offset="2">
        <Input v-model="value6" type="textarea" :rows="18" placeholder="Enter something..."></Input>
        </Col>
    </Row>

        </TabPane>
    </Tabs>
   </Card>
</div>
</template>

<script>
export default {
    data(){
        return {
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            value5: '',
            value6: '',
            ScaleSelet1: '',
            ScaleSelet2: '',
             Scale1: [
                   {text: 'A', value: '0'},
                        {text: '#A', value: '1'},
                        {text: 'B', value: '2'},
                        {text: 'C', value: '3'},
                        {text: '#C', value: '4'},
                        {text: 'D', value: '5'},
                        {text: '#D', value: '6'},
                        {text: 'E', value: '7'},
                        {text: 'F', value: '8'},
                        {text: '#F', value: '9'},
                        {text: 'G', value: '10'},
                        {text: '#G', value: '11'}
                ],
                   Scale2: [
                   {text: 'A', value: '0'},
                        {text: '#A', value: '1'},
                        {text: 'B', value: '2'},
                        {text: 'C', value: '3'},
                        {text: '#C', value: '4'},
                        {text: 'D', value: '5'},
                        {text: '#D', value: '6'},
                        {text: 'E', value: '7'},
                        {text: 'F', value: '8'},
                        {text: '#F', value: '9'},
                        {text: 'G', value: '10'},
                        {text: '#G', value: '11'}
                ],
        }
    },
  components: {
      
  }
};
</script>

<style >
.translator {
  max-width: 1200px;
  margin: 0px auto 50px auto;
  min-width: 960px;

}
/* .translator .ivu-tabs-tab */
.translator .ivu-tabs .ivu-tabs-content-animated{
    padding-top: 20px;
}
/* .dsadsa{
    height: 100px;
} */
.translator .ivu-tabs-nav-container {
  width: 360px;
  margin: auto;
  font-size: 18px;
}
.translator-title {
  margin-bottom: 10px;
  margin-top: -50px;
  font-size: 36px;
  text-align: center;
  /* background: hsl(210, 13%, 60%); */
  color: hsl(210, 13%, 30%);
  text-shadow: 0 1px 1px #e0ae62;
}
.button-bar1{

}

</style>
