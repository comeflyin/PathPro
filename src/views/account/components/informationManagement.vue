<template>
  <div class="w-screen h-screen bg-white">
    <div class="border-b border-gray-500">
      <van-nav-bar title="常用信息" left-arrow @click-left="onClickLeft" />
    </div>
    <!-- 头像修改 -->
    <div class="m-2 border-b">
      <div class="flex justify-between">
        <span class="flex items-center text-xs">个人照片</span>
        <div><van-cell title="编辑" title-class="text-blue-500" @click="showTotal.showOne = true" /></div>
        <van-action-sheet v-model:show="showTotal.showOne">
          <div class="content p-2">
            <van-uploader>
              <van-button round-lg block type="primary"> 从相册中选择 </van-button>
            </van-uploader>
          </div>
        </van-action-sheet>
      </div>
      <img class="w-12 h-12 rounded-full mb-2" src="https://img.yzcdn.cn/vant/cat.jpeg" alt="" />
    </div>
    <!-- 姓名 -->
    <div class="m-2 border-b">
      <div class="flex justify-between">
        <span class="flex items-center text-xs">姓名</span>
        <div><van-cell title="编辑" title-class="text-blue-500" @click="showTotal.showTwo = true" /></div>
        <van-action-sheet v-model:show="showTotal.showTwo" title="姓名">
          <div class="content p-2">
            <van-form @submit="onSubmitName">
              <van-cell-group inset>
                <div>名</div>
                <van-field
                  v-model="NameForm.username"
                  name="名"
                  placeholder="请填写"
                  :rules="[{ required: true, message: '此栏为必填字段' }]"
                />
              </van-cell-group>
              <van-cell-group inset>
                <div>姓</div>
                <van-field
                  v-model="NameForm.surname"
                  name="姓"
                  placeholder="请填写"
                  :rules="[{ required: true, message: '此栏为必填字段' }]"
                />
              </van-cell-group>
              <div style="margin: 16px">
                <van-button round-lg block color="#ff5c01" native-type="submit"> 保存 </van-button>
              </div>
            </van-form>
          </div>
        </van-action-sheet>
      </div>
      <div class="font-bold mb-2">未填写</div>
    </div>
    <!-- 称谓 -->
    <div class="m-2 border-b">
      <div class="flex justify-between">
        <span class="flex items-center text-xs">称谓</span>
        <div><van-cell title="编辑" title-class="text-blue-500" @click="showTotal.showThree = true" /></div>
        <van-action-sheet v-model:show="showTotal.showThree" title="称谓">
          <div class="content p-2">
            <div>称谓</div>
            <div class="my-2 w-full h-10 border border-gray-200 rounded-lg p-2 mb-8">
              <select class="w-full h-full outline-none">
                <option value="先生" selected>先生</option>
                <option value="女士">女士</option>
                <option value="小姐">小姐</option>
              </select>
            </div>
            <van-button round-lg block color="#ff5c01" native-type="submit"> 保存 </van-button>
          </div>
        </van-action-sheet>
      </div>
      <div class="font-bold mb-2">未填写</div>
    </div>
    <!-- 出生日期 -->
    <div class="m-2 border-b">
      <div class="flex justify-between">
        <span class="flex items-center text-xs">出生日期</span>
        <div><van-cell title="编辑" title-class="text-blue-500" @click="showTotal.showFour = true" /></div>
        <van-action-sheet v-model:show="showTotal.showFour" title="出生日期">
          <div class="content">
            <van-date-picker v-model="currentDate" :min-date="minDate" :max-date="maxDate" confit="" />
          </div>
        </van-action-sheet>
      </div>
      <div class="font-bold mb-2">未填写</div>
    </div>
    <!-- 居住地 -->
    <div class="m-2 border-b">
      <div class="flex justify-between">
        <span class="flex items-center text-xs">居住国家/地区</span>
        <div><van-cell title="编辑" title-class="text-blue-500" @click="show = true" /></div>
        <van-popup v-model:show="show" round position="bottom">
          <van-cascader
            v-model="cascaderValue"
            title="请选择所在地区"
            :options="options"
            @close="show = false"
            @finish="onFinish"
          />
        </van-popup>
      </div>
      <div class="font-bold mb-2">{{ fieldValue ? fieldValue : "未填写" }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"
import { useCascaderAreaData } from "@vant/area-data"
interface nameForm {
  username: string
  surname: string
}
const NameForm = reactive<nameForm>({
  username: "",
  surname: "",
})
const onSubmitName = () => {
  console.log(NameForm)
}
const showTotal = reactive({
  showOne: false,
  showTwo: false,
  showThree: false,
  showFour: false,
  showFive: false,
})
const currentDate = ref(["2000", "01", "01"])
const minDate = new Date(1990, 0, 1)
const maxDate = new Date(2025, 0, 1)
const show = ref(false)
const fieldValue = ref("")
const cascaderValue = ref("")
const options = useCascaderAreaData()
const onFinish = (e: { selectedOptions: { text: string }[] }) => {
  show.value = false
  fieldValue.value = e.selectedOptions.map((option: { text: string }) => option.text).join("/")
}

const onClickLeft = () => {
  history.back()
}
</script>

<style scoped>
:deep(.van-field) {
  @apply p-0 my-2;
}
:deep(.van-field__body) {
  @apply h-10 border border-gray-200 rounded-lg p-2;
}
:deep(.van-uploader) {
  @apply block w-full;
}
:deep(.van-uploader__input-wrapper) {
  @apply block w-full;
}
</style>
