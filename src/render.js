const key = "1b6e7fe252350a69a052facaabd1b532e4d96f0dd73064c43ff7a6f777ded0a5088817aa7299c489";

const form = document.getElementById('checkip')
form.addEventListener('submit', checkip)

 async function checkip(event) {
     event.preventDefault()
     const ip = document.getElementById('ip').value;
     const data = await fetch(`https://api.abuseipdb.com/api/v2/check?ipAddress=${ip}`, {
     method: 'get',
     headers: {'Accept': 'application/json', 'Key': key}
 }).then(res => res.json())
  console.log(data)
  document.getElementById('abuse').innerHTML = `<b>Abuse Confidence: ${data.data.abuseConfidenceScore}<b><br>`
  document.getElementById('totalreports').innerHTML = `<b>Total Reports: ${data.data.totalReports}<b><br>`
  document.getElementById('domain').innerHTML = `<b>Domain: ${data.data.domain}<b><br>`
  document.getElementById('isp').innerHTML = `<b>ISP: ${data.data.isp}<b><br>`
  document.getElementById('countrycode').innerHTML = `<b>Country Code: ${data.data.countryCode}<b><br>`
  document.getElementById('usagetype').innerHTML = `<b>Usage Type: ${data.data.usageType}<b><br>`
  document.getElementById('whitelisted').innerHTML = `<b>Whitelisted?: ${data.data.isWhitelisted}<b><br>`
  document.getElementById('lastreported').innerHTML = `<b>Last Reported: ${data.data.lastReportedAt}<b><br>`
 }

 const form2 = document.getElementById('reportip')
form2.addEventListener('submit', reportip)

async function reportip(event) {
    event.preventDefault();
    const ip = document.getElementById('ip2').value;
    const category = document.getElementById('category').value;
    const reason = document.getElementById('reason').value;
    const apikey = document.getElementById('apikey').value;

    if(apikey == "") {
        const data = await fetch(`https://api.abuseipdb.com/api/v2/report?ip=${ip}&categories=${category}&comment=${reason}`, {
            method: 'post',
            headers: {'Accept': 'application/json', 'Key': key}
        }).then(res => res.json())
        console.log(data)
    } else {
        const data = await fetch(`https://api.abuseipdb.com/api/v2/report?ip=${ip}&categories=${category}&comment=${reason}`, {
            method: 'post',
            headers: {'Accept': 'application/json', 'Key': apikey}
        }).then(res => res.json())
        console.log(data)
    }
}