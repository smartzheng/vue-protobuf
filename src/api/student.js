import request from '../lib/request'

// params是object类型的请求参数
// school.PBStudentListReq 是定义好的请求体model
// school.PBStudentListRsp 是定义好的响应model
// getStudentList 是接口名称
export function getStudentList (params) {
  console.log('原始数据', params)
  const req = request.create('PBStudentListReq', params)
  return request('getStudentList', req, 'school.PBStudentListRsp')
}

