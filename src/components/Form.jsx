import React from 'react'
import renderInput from './RenderInput'
import renderTextArea from './RenderTextArea'
function Form() {
  return (
    <div className=" md:container md:mx-auto w-1/2 p-8 text-left">
        <h2 className="text-xl font-semibold text-pink-600 mb-4">เพิ่มข้อมูลพัสดุ</h2>
        <form>
            {renderInput('เลขที่ใบสั่งซื้อ')}
            {renderInput('หมวดหมู่การใช้งาน')}
            {renderInput('ประเภท')}
            {renderInput('ประเภทย่อย')}
            {renderInput('หน่วยนับ')}
            {renderTextArea('รายละเอียดพัสดุ (สี, ขนาด, ยี่ห้อ)')}
            {renderInput('เเหล่งที่มา')}
            {renderInput('จำนวนที่ได้รับซื้อ')}
            {renderInput('วันที่ได้รับซื้อ', 'date')}
            {renderInput('จำนวนคงเหลือ', 'number')}
            {renderInput('ราคาต่อหน่วย', 'number')}
            {renderInput('ราคาคงเหลือ', 'number')}
            {renderInput('ราคารวม', 'number')}
            {renderInput('ผู้บันทึก')}
            {renderInput('วันที่บันทึก', 'date')}
            
                <div className="mb-4">
                    <label className="block text-gray-700">ใส่ภาพ</label>
                    <input type="file" className="border border-gray-300 p-2 rounded" />
                </div>

                <div className="container mx-auto flex justify-center items-center space-x-4">
                    <button type="submit" className="bg-gray-400 text-white px-4 py-2 rounded">ยกเลิก</button>
                    <button type="submit" className="bg-yellow-400 text-white px-4 py-2 rounded">บันทึก</button>
                </div>   

        </form>
  </div>

  
  )
}

export default Form