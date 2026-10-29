# 苔苔與硃砂：暖燈舊城 · 第一盞燈 v0.2

療癒單人原型，不是六大世界／100 關完成版。苔苔想射波、搵食、收工；硃砂冷靜吐槽，實際關心朋友。

## 本機
Node 22：npm install；npm run dev。npm run build 先生成音樂再建置。沒有背景伺服器或外部 CDN 依賴。主線：調查路燈→維修箱藍／綠／金接線→開燈→麵包店對話。無強制限時／死亡。WASD、Shift、拖曳、E；手機底部方向掣。localStorage 自動存檔，非雲端。沒有配音。

## 原創背景音樂
scripts/music.mjs 在 dev/build 時生成 public/audio/warm-window.wav：48 秒、80 BPM、22,050 Hz、PCM16 雙聲道。C/Am/F/G、撥弦／鐘琴感旋律。音檔複製入 dist 及 APK；無需手動補檔。這是上一輪音樂的可重建版本，包含循環尾音改良，不宣稱與舊附件位元完全相同。尚待聽感／手機混音驗收，非專業母帶。

## 模型
獨立 characters.js，頭、眼、耳、尾、腳、嫩芽／牛油節點；眨眼、呼吸、尾部與嫩芽動態。仍是幾何代理模型，不是正式水彩貼圖或蒙皮 GLB。

## Android 及通知
push main／手動 workflow 會建置 debug APK、上傳 14 天 artifact、建立私人 repo prerelease，再開一個 @kylec1114 Issue 通知。每次成功執行會建立新 Release、tag、Issue。通知是否推播／電郵視 GitHub 個人設定。失敗不發成功通知。使用 GitHub Actions 分鐘及 contents/ issues write 權限，不對外公開 repo，不含外部通知服務。workflow 上傳權限不足時需要 connector 授權調整。

手機登入 GitHub → Releases → 最新 Testing APK → Assets → sprout-town-debug.apk。亦可 Actions→成功 run→Artifacts→解壓。僅 Android。只安裝自己 repo 可信版本；如提示，可單獨允許檔案管理員安裝，完成後關閉。保留 Play Protect，惡意警告先停下檢查。新 CI runner 的 debug key 可能不同，升級簽署尚待持久化；不要因安裝失敗就直接解除安裝，解除安裝會清除進度。

## 驗收狀態
本機 JS 語法／WAV 標頭可檢查；不代表 npm、Vite、Android、真機、循環音質通過。未取得實際建置結果前不得宣稱 APK ready。正式驗收關卡 0/100；已實作原型關卡 1/100（1% 只指關卡數，不代表全製作完成率）。依賴固定版本但 lockfile、安全更新及正式發佈簽署仍待完成。
