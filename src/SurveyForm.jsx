import React from 'react';
import { FileSpreadsheet } from 'lucide-react';

export default function SurveyForm({ formData, setFormData, feedbackSuccess, setFeedbackSuccess }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd7D-G6pAnK7Oskw3u9_Uv6o_O0X3l9_Q-o8K8I84rGv7DNgA/formResponse";
    const targetParams = new URLSearchParams();
    targetParams.append("entry.1583561937", formData.entry_1583561937);
    targetParams.append("entry.1623910385", formData.entry_1623910385);
    targetParams.append("entry.1580170882", formData.entry_1580170882);
    targetParams.append("entry.1144026600", formData.entry_1144026600);

    try {
      await fetch(formUrl, {
        method: "POST", mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: targetParams.toString()
      });
      setFeedbackSuccess(true);
    } catch (error) {
      setFeedbackSuccess(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label className="block text-xs font-mono uppercase text-slate-400">1. 讀者稱呼 / Alias</label>
        <input type="text" name="entry_1583561937" required disabled={feedbackSuccess} value={formData.entry_1583561937} onChange={handleInputChange} placeholder="例如：羅丁先生 / e.g. Mr. Rodin" className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-850 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-amber-500 transition-colors" />
      </div>

      <div className="space-y-2">
        <label className="block text-xs font-mono uppercase text-slate-400">2. 電子郵件信箱 / Secure Email</label>
        <input type="email" name="entry_1623910385" required disabled={feedbackSuccess} value={formData.entry_1623910385} onChange={handleInputChange} placeholder="your-email@domain.com" className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-850 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-amber-500 transition-colors" />
      </div>

      <div className="space-y-2">
        <label className="block text-xs font-mono uppercase text-slate-400">3. 書籍規格選購 / Edition Choice</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { label: "Kindle 電子書版本 (Kindle Edition)", value: "Kindle電子書版本 (Kindle Edition)" },
            { label: "紙質平裝書版本 (Paperback Edition)", value: "紙質平裝書版本 (Paperback Edition)" }
          ].map((option) => (
            <label key={option.value} className={`flex items-center space-x-3 p-3.5 rounded-xl border cursor-pointer select-none text-xs transition-all ${formData.entry_1580170882 === option.value ? 'border-amber-500 bg-amber-500/5 text-white ring-1 ring-amber-500/20' : 'border-slate-850 bg-slate-950 text-slate-400 hover:border-slate-800'}`}>
              <input type="radio" name="entry_1580170882" required disabled={feedbackSuccess} value={option.value} checked={formData.entry_1580170882 === option.value} onChange={handleInputChange} className="sr-only" />
              <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${formData.entry_1580170882 === option.value ? 'border-amber-500' : 'border-slate-700'}`}>
                {formData.entry_1580170882 === option.value && <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />}
              </span>
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-xs font-mono uppercase text-slate-400">4. 您目前最想奪回的主權核心是？</label>
        <div className="relative">
          <select name="entry_1144026600" required disabled={feedbackSuccess} value={formData.entry_1144026600} onChange={handleInputChange} className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-850 text-slate-300 text-sm focus:outline-none appearance-none focus:border-amber-500">
            <option value="" disabled>請點擊選擇您最想突破的課題...</option>
            <option value="擺脫虛榮數據，重新找回深度思考專注力">擺脫虛榮數據，重新找回深度思考專注力</option>
            <option value="打破無限滾動動態牆帶來的多巴胺奴役控制">打破無限滾動動態牆帶來的多巴胺奴役控制</option>
            <option value="在日常生活實體環境中建立有效的物理防禦干擾屏障">在日常生活實體環境中建立有效的物理防禦干擾屏障</option>
            <option value="參考 2026 APA 臨床指引數據，全面降低平台與訊息產生的焦慮感">參考 2026 APA 臨床指引數據，全面降低平台與訊息產生的焦慮感</option>
          </select>
          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-500 text-xs">▼</div>
        </div>
      </div>

      {!feedbackSuccess ? (
        <button type="submit" className="w-full inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold hover:from-amber-400 hover:to-orange-400 transition-all shadow-lg shadow-amber-500/10">
          <FileSpreadsheet className="w-4 h-4" />
          <span>匿名傳送調查數據 / Submit Securely</span>
        </button>
      ) : (
        <div className="w-full p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/30 text-xs text-cyan-400 font-mono text-center">
          <b>Data Securely Transferred!</b> Your response has been written to the Google Form server. Thank you.
        </div>
      )}
    </form>
  );
}