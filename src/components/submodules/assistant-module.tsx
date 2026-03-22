import { useState } from "react";
import { Button, Card, ScrollShadow } from "@heroui/react";
import { ArrowUpIcon } from "@phosphor-icons/react/dist/csr/ArrowUp";
import { ClockCounterClockwiseIcon } from "@phosphor-icons/react/dist/csr/ClockCounterClockwise";
import TextareaAutosize from "react-textarea-autosize";

type AssistantMessage = {
  body: string;
  id: string;
  role: "assistant" | "user";
};

type AssistantModuleProps = {
  minimal?: boolean;
};

const starterPrompts = [
  "Ringkas penjualan hari ini",
  "Barang apa yang perlu direstok besok?",
  "Jelaskan cara pakai mode kasir",
  "Pengeluaran mana yang paling besar bulan ini?",
] as const;

const initialMessages: AssistantMessage[] = [
  {
    body: "Halo. Saya bisa bantu merangkum kondisi toko, memberi saran restok, atau menjelaskan cara pakai menu yang ada.",
    id: "assistant-welcome",
    role: "assistant",
  },
];

function createAssistantReply(prompt: string) {
  const normalizedPrompt = prompt.toLowerCase();

  if (normalizedPrompt.includes("restok")) {
    return "Cek tab Stok untuk melihat barang yang menipis. Fokus utama biasanya barang dengan stok di bawah batas restok dan barang yang paling sering terjual.";
  }

  if (normalizedPrompt.includes("penjualan")) {
    return "Buka Ringkasan untuk melihat omzet hari ini, lalu lanjut ke Laporan jika ingin melihat laba sederhana, pengeluaran, dan metode pembayaran yang paling dominan.";
  }

  if (normalizedPrompt.includes("kasir")) {
    return "Mode kasir disederhanakan menjadi dua tab: Kasir untuk transaksi baru dan Transaksi untuk melihat riwayat terbaru tanpa membuka seluruh dashboard.";
  }

  if (normalizedPrompt.includes("pengeluaran")) {
    return "Cek modul Laporan untuk breakdown pengeluaran per kategori. Dari sana Anda bisa melihat kategori biaya yang paling besar pada periode yang dipilih.";
  }

  return "Saya belum terhubung ke AI backend, tetapi saya bisa membantu mengarahkan Anda ke modul yang tepat berdasarkan kebutuhan operasional toko.";
}

export function AssistantModule({ minimal = false }: AssistantModuleProps) {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<AssistantMessage[]>(initialMessages);
  const trimmedInput = inputValue.trim();
  function sendMessage(rawValue: string) {
    const value = rawValue.trim();

    if (!value) {
      return;
    }

    const userMessage: AssistantMessage = {
      body: value,
      id: `user-${crypto.randomUUID()}`,
      role: "user",
    };
    const assistantMessage: AssistantMessage = {
      body: createAssistantReply(value),
      id: `assistant-${crypto.randomUUID()}`,
      role: "assistant",
    };

    setMessages((currentMessages) => [...currentMessages, userMessage, assistantMessage]);
    setInputValue("");
  }

  const content = (
    <div className="space-y-4">
      {minimal ? null : (
        <div className="space-y-1">
          <h3 className="text-lg font-semibold">Asisten</h3>
          <p className="text-sm text-stone-500">
            Tanyakan apa pun tentang toko, lalu lanjutkan percakapan tanpa berpindah modul.
          </p>
        </div>
      )}

      {minimal ? null : (
        <div className="flex flex-wrap gap-2">
          {starterPrompts.map((prompt) => (
            <Button
              className="rounded-full"
              key={prompt}
              onPress={() => sendMessage(prompt)}
              variant="outline"
            >
              {prompt}
            </Button>
          ))}
        </div>
      )}

      <ScrollShadow
        className={`${minimal ? "h-[calc(100vh-220px)]" : "h-[min(68vh,720px)]"} px-4 py-4`}
        hideScrollBar
      >
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
          {messages.map((message) => {
            const isAssistant = message.role === "assistant";

            return (
              <div
                className={`flex gap-3 ${isAssistant ? "justify-start" : "justify-end"}`}
                key={message.id}
              >
                <div
                  className={`max-w-3xl rounded-[28px] px-4 py-3 text-sm leading-7 ${
                    isAssistant
                      ? "rounded-tl-md border border-stone-200 bg-white text-stone-800"
                      : "rounded-tr-md bg-stone-950 text-stone-50"
                  }`}
                >
                  <p className="whitespace-pre-wrap">{message.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollShadow>

      <div className={`${minimal ? "" : "border-t border-stone-200 pt-4"}`}>
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-3">
          <div className="rounded-[28px] border border-stone-200 bg-stone-50 p-2 shadow-sm">
            <div className="flex items-end gap-3">
              <TextareaAutosize
                className="max-h-56 min-h-[28px] w-full resize-none border-0 bg-transparent px-0 py-2 text-sm leading-7 text-stone-900 outline-none placeholder:text-stone-400"
                maxRows={8}
                minRows={1}
                onChange={(event) => setInputValue(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    sendMessage(inputValue);
                  }
                }}
                placeholder="Tanyakan apa yang ingin Anda ketahui tentang toko ini"
                value={inputValue}
              />
              <Button
                aria-label="Kirim pesan"
                className="mb-1 mr-1 size-10 rounded-full"
                isDisabled={!trimmedInput}
                onPress={() => sendMessage(inputValue)}
              >
                <ArrowUpIcon aria-hidden size={16} />
              </Button>
            </div>
          </div>

          {minimal ? null : (
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-stone-500">
              <p>Tekan Enter untuk kirim, Shift + Enter untuk baris baru.</p>
              <div className="flex items-center gap-2">
                <ClockCounterClockwiseIcon aria-hidden size={14} />
                <span>Respons saat ini masih simulasi lokal.</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  if (minimal) {
    return content;
  }

  return (
    <Card className="overflow-hidden border border-stone-200 bg-stone-50 shadow-none">
      <Card.Content className="p-4">{content}</Card.Content>
    </Card>
  );
}
