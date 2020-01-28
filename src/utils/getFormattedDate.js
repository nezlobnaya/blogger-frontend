const getFormattedDate = date => {
    return new Date(Date.parse(date)).toLocaleDateString('en-UK', {
        dateStyle: 'long'
    })
}

export default getFormattedDate; 