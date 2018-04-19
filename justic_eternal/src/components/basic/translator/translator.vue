<template>
  <!-- import { clearTimeout } from 'timers'; -->
  <div>
    <div class="translator-title"> 转谱器</div>
    <Card class="translator">
      <Tabs value="directly">
        <TabPane label="直接转谱" name="directly">
  
          <div class="button-bar1">
            转换前:
            <Select v-model="ScaleSelet1" style="width:100px; margin-right: 30px;">
                              <Option v-for="item in Scale1" :value="item.value" :key="item.value">{{ item.text }}</Option>
                             </Select> 转换后:
            <Select v-model="ScaleSelet2" style="width:100px ">
                                <Option v-for="item in Scale2" :value="item.value" :key="item.value">
                                    {{item.text}}
                                    </Option>
                             </Select>
            <Button type="info" style="margin-left:30px" @click="change1">确定转换</Button>
            <div class="preferSharpBar1">
            <div>
              <input class="tgl tgl-skewed" id="cb0" type="checkbox" :checked="flag[0]" />
              <label class="tgl-btn" data-tg-off="#3" data-tg-on="#3" for="cb0" @click="preferSharp(0)"></label>
  
              <input class="tgl tgl-skewed" id="cb1" type="checkbox" :checked="flag[1]" />
              <label class="tgl-btn" data-tg-off="4" data-tg-on="4" for="cb1" @click="preferSharp(1)"></label>
            </div>
            <div>
              <input class="tgl tgl-skewed" id="cb2" type="checkbox" :checked="flag[2]" />
              <label class="tgl-btn" data-tg-off="#7" data-tg-on="#7" for="cb0" @click="preferSharp(2)"></label>
  
              <input class="tgl tgl-skewed" id="cb3" type="checkbox" :checked="flag[3]" />
              <label class="tgl-btn" data-tg-off="[1]" data-tg-on="[1]" for="cb1" @click="preferSharp(3)"></label>
            </div>
  
            </div>
  
          </div>
          <Row>
            <Col span="10" offset="1">
            <Input v-model="value1" type="textarea" :rows="18" placeholder="转换器的谱子在此输入....."></Input>
            </Col>
            <Col span="10" offset="2">
            <Input v-model="value2" type="textarea" :rows="18" placeholder="这里是转换结果....."></Input>
            </Col>
          </Row>
        </TabPane>
        <TabPane label="逐步转谱" name="step">
  
          <div class="button-bar2">
  
            <Button-group style="margin-left:197px;">
              <Button type="primary" @click="changeup">
                    <Icon type="chevron-left"></Icon>
                    升一调
                </Button>
              <Button type="primary" @click="changedown">
                    降一调
                    <Icon type="chevron-right" ></Icon>
                </Button>
            </Button-group>
            <div class="preferSharpBar">
              <div>
                <input class="tgl tgl-skewed" id="cb4" type="checkbox" :checked="flag[4]" />
                <label class="tgl-btn" data-tg-off="#3" data-tg-on="#3" for="cb4" @click="preferSharp(4)"></label>
                <input class="tgl tgl-skewed" id="cb5" type="checkbox" :checked="flag[5]" />
                <label class="tgl-btn" data-tg-off="4" data-tg-on="4" for="cb5" @click="preferSharp(5)"></label>
              </div>
              <div>
                <input class="tgl tgl-skewed" id="cb6" type="checkbox" :checked="flag[6]" />
                <label class="tgl-btn" data-tg-off="#7" data-tg-on="#7" for="cb6" @click="preferSharp(6)"></label>
                <input class="tgl tgl-skewed" id="cb7" type="checkbox" :checked="flag[7]" />
                <label class="tgl-btn" data-tg-off="[1]" data-tg-on="[1]" for="cb7" @click="preferSharp(7)"></label>
              </div>
            </div>
  
  
          </div>
  
  
          <Row>
            <Col span="10" offset="1">
            <Input v-model="value3" type="textarea" :rows="18" placeholder="转换器的谱子在此输入....."></Input>
            </Col>
            <Col span="10" offset="2">
            <Input v-model="value4" type="textarea" :rows="18" placeholder="这里是转换结果....."></Input>
            </Col>
          </Row>
  
        </TabPane>
        <TabPane label="曲谱转换" name="turn">
          <div class="button-bar3">
            <Button type="info" style="margin-left:30px" @click="change2">确定转换</Button>
          </div>
          <Row>
            <br/>
            <Col span="10" offset="1">
            <Input v-model="value5" type="textarea" :rows="18" placeholder="BD谱在此输入......"></Input>
            </Col>
            <Col span="10" offset="2">
            <Input v-model="value6" type="textarea" :rows="18" placeholder="数字谱在此输入......"></Input>
            </Col>
          </Row>
  
        </TabPane>
      </Tabs>
    </Card>
  </div>
</template>

<script>
import Transcore from "je-transcore";
export default {
  data() {
    return {
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value6: "",

      ScaleSelet1: "",
      ScaleSelet2: "",
      flag: [false, false, false, false, false, false, false, false], //存储异性同音参数
      preferSharpB1: false, //是否进行异性同音
      preferSharpE1: false, //
      preferSharpB2: false, //是否进行异性同音
      preferSharpE3: false, //
      Scale1: [
        {
          text: "A",
          value: "0"
        },
        {
          text: "#A",
          value: "1"
        },
        {
          text: "B",
          value: "2"
        },
        {
          text: "C",
          value: "3"
        },
        {
          text: "#C",
          value: "4"
        },
        {
          text: "D",
          value: "5"
        },
        {
          text: "#D",
          value: "6"
        },
        {
          text: "E",
          value: "7"
        },
        {
          text: "F",
          value: "8"
        },
        {
          text: "#F",
          value: "9"
        },
        {
          text: "G",
          value: "10"
        },
        {
          text: "#G",
          value: "11"
        }
      ],
      Scale2: [
        {
          text: "A",
          value: "0"
        },
        {
          text: "#A",
          value: "1"
        },
        {
          text: "B",
          value: "2"
        },
        {
          text: "C",
          value: "3"
        },
        {
          text: "#C",
          value: "4"
        },
        {
          text: "D",
          value: "5"
        },
        {
          text: "#D",
          value: "6"
        },
        {
          text: "E",
          value: "7"
        },
        {
          text: "F",
          value: "8"
        },
        {
          text: "#F",
          value: "9"
        },
        {
          text: "G",
          value: "10"
        },
        {
          text: "#G",
          value: "11"
        }
      ]
    };
  },
  components: {},
  methods: {
    preferSharp: function(type) {
      this.flag[type] = !this.flag[type];
      type % 2
        ? this.flag.splice(type - 1, 1, false)
        : this.flag.splice(type + 1, 1, false);
    },
    change1: function() {
       this.value2 = Transcore.tune(this.value1, { offset:this.ScaleSelet2-this.ScaleSelet1,  preferSharpE:this.flag[1], preferSharpB:this.flag[3]})
    },
    change2: function() {
      this.value6 ==''
        ? this.value6 = Transcore.toJE(this.value5)
        : this.value5 = Transcore.toBD(this.value6);


    },
    changedown: function() {
      console.log('dawn')
      this.value4 = Transcore.tune(this.value3,{offset:-1,preferSharpE:this.flag[5], preferSharpB:this.flag[7]})
    },
    changeup: function() {
       this.value4 = Transcore.tune(this.value3,{offset:1,preferSharpE:this.flag[5], preferSharpB:this.flag[7]})
    }
    
  }
};
</script>

<style>
.translator {
  max-width: 1200px;
  margin: 0px auto 50px auto;
  min-width: 960px;
}

/* .translator .ivu-tabs-tab */

.translator .ivu-tabs .ivu-tabs-content-animated {
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

.button-bar1 {
  width: 825px;
  margin: 0px auto 30px auto;
}

.button-bar2 {
  width: 835px;
  margin: 0px auto 30px auto;
}

.button-bar3 {
  width: 144px;
  margin: 0px auto 30px auto;
}

.z_activity {
  color: blue;
}

.optionsBar button:focus {
  outline: none;
}

.tgl {
  display: none;
}

.tgl,
.tgl:after,
.tgl:before,
.tgl *,
.tgl *:after,
.tgl *:before,
.tgl + .tgl-btn {
  box-sizing: border-box;
  font-size: 15px;
}

.tgl::-moz-selection,
.tgl:after::-moz-selection,
.tgl:before::-moz-selection,
.tgl *::-moz-selection,
.tgl *:after::-moz-selection,
.tgl *:before::-moz-selection,
.tgl + .tgl-btn::-moz-selection {
  background: none;
}

.tgl::selection,
.tgl:after::selection,
.tgl:before::selection,
.tgl *::selection,
.tgl *:after::selection,
.tgl *:before::selection,
.tgl + .tgl-btn::selection {
  background: none;
}

.tgl + .tgl-btn {
  outline: 0;
  display: block;
  width: 4em;
  height: 2em;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.tgl + .tgl-btn:after,
.tgl + .tgl-btn:before {
  position: relative;
  display: block;
  content: "";
  width: 50%;
  height: 100%;
}

.tgl + .tgl-btn:after {
  left: 0;
}

.tgl + .tgl-btn:before {
  display: none;
}

.tgl:checked + .tgl-btn:after {
  left: 50%;
}

.tgl-skewed + .tgl-btn {
  overflow: hidden;
  -webkit-transform: skew(-10deg);
  transform: skew(-10deg);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  background: #888;
}

.tgl-skewed + .tgl-btn:after,
.tgl-skewed + .tgl-btn:before {
  -webkit-transform: skew(10deg);
  transform: skew(10deg);
  display: inline-block;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  width: 100%;
  text-align: center;
  position: absolute;
  line-height: 2em;
  font-weight: bold;
  color: #fff;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
}

.tgl-skewed + .tgl-btn:after {
  left: 100%;
  content: attr(data-tg-on);
}

.tgl-skewed + .tgl-btn:before {
  left: 0;
  content: attr(data-tg-off);
}

.tgl-skewed + .tgl-btn:active {
  background: #888;
}

.tgl-skewed + .tgl-btn:active:before {
  left: -10%;
}

.tgl-skewed:checked + .tgl-btn {
  background: #86d993;
}

.tgl-skewed:checked + .tgl-btn:before {
  left: -100%;
}

.tgl-skewed:checked + .tgl-btn:after {
  left: 0;
}

.tgl-skewed:checked + .tgl-btn:active:after {
  left: 10%;
}
.preferSharpBar label ,.preferSharpBar1 label{
float: left;
}
.preferSharpBar div,.preferSharpBar1 div{
  margin: 0px 10px;;
  width: 130px;
  display: inline-block;
    vertical-align: bottom;
}
.preferSharpBar {
  display: inline-block;
  width: 350px;
  margin-left: 100px;
  vertical-align: bottom;
}
.preferSharpBar1{
    display: inline-block;
  width: 350px;
  margin-left: 20px;
  vertical-align: bottom;
}
</style>
