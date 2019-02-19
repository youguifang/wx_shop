function request(url, method = "GET") {
    return new Promise((resolve, reject) => {
        wx.request({
            url,
            success: res => {
                resolve(res)
            }
        });
    })
}

export default request