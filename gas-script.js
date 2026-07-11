const SHEET_NAME = 'Sheet1';

function doPost(e) {
  try {
    // 允许跨域
    const output = ContentService.createTextOutput();
    output.setMimeType(ContentService.MimeType.JSON);

    // 解析数据
    let data;
    try {
      // 支持 FormData 格式 (e.parameter.data) 或 JSON 格式 (e.postData.contents)
      if (e.parameter && e.parameter.data) {
        data = JSON.parse(e.parameter.data);
      } else if (e.postData && e.postData.contents) {
        data = JSON.parse(e.postData.contents);
      } else {
        output.setContent(JSON.stringify({
          status: 'error',
          message: '未找到数据'
        }));
        return output;
      }
    } catch (err) {
      output.setContent(JSON.stringify({
        status: 'error',
        message: '数据格式错误: ' + err.toString()
      }));
      return output;
    }

    // 打开表格
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME);

    // 如果数据是数组（多行），逐行写入
    // 如果是单个对象，包装成数组
    const rows = Array.isArray(data) ? data : [data];

    rows.forEach(row => {
      sheet.appendRow([
        row.participant_id || '',
        row.age || '',
        row.gender || '',
        row.phase || '',
        row.trial_index || '',
        row.audio || '',
        row.correct_image || '',
        row.response || '',
        row.correct !== undefined ? row.correct : '',
        row.rt_ms || '',
        row.play_count || '',
        row.timeout !== undefined ? row.timeout : '',
        row.timestamp || ''
      ]);
    });

    output.setContent(JSON.stringify({
      status: 'success',
      message: `成功写入 ${rows.length} 条数据`
    }));
    return output;

  } catch (err) {
    const output = ContentService.createTextOutput();
    output.setMimeType(ContentService.MimeType.JSON);
    output.setContent(JSON.stringify({
      status: 'error',
      message: err.toString()
    }));
    return output;
  }
}

function doGet(e) {
  const output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  output.setContent(JSON.stringify({
    status: 'ok',
    message: '听音选图实验数据接收接口正常运行'
  }));
  return output;
}
