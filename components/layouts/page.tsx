const Page = () => {
    return (
        <div className="w-full p-20">
          <div className="bg-white shadow-2xl h-[200vh] wrap-words font-serif p-6">
            Em chưa thể hoàn toàn bài thi trong 3 tiếng. Tuy nhiên, em vẫn muốn chia sẽ một số thứ em có thể làm
            nếu được thêm thời gian: <br/>
              - Nối từng input của header với 1 getter trong store.ts, makeAutoObservable trong constructor của Store
              sẽ tự động update lên page <br/>
              - Với 3 mục còn lại, em sẽ update trên 1 json, bấm nút Add thì sẽ dùng getter vào Store để update Page <br/>
              - Em để ý rằng UI của website mẫu làm từ MaterialUI, nhưng vì thời gian có hạn và em quen thuộc với Tailwind
              nhất nên tạm thời giả lập style Material <br/>
              - Một lần nữa, em cảm ơn Ban Tố Chức học bổng và MindX nhiều vì cho em cơ hội được thể hiện bản thân, và <br/>
              em hi vọng được cho em 1 cơ hội nữa để thể hiện trong vòng phỏng vấn
          </div>
        </div>
    )
}

export default Page;