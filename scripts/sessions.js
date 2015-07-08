"use strict";var sessions=[{type:"sponsor",title:"Javaな会社のScalaへの取り組み",description:["ヌーラボでは今までJavaをメインの開発言語として利用してきましたが、最近はScalaの採用事例が増えてきています。それにあわせて、新人研修にScalaを用いたり、社内勉強会を開催するなど、Scalaの教育にも力を入れています。","このセッションでは、Javaの会社であるヌーラボがScalaをどうやって段階的に採用していったのか？の経緯を正直にご紹介します。また、Java 8とScalaの両方を利用している中で感じた違いなどもお話ししたいと思います。"],speaker:{name:"縣 俊貴",introduction:["株式会社ヌーラボCTO。プロジェクト管理ツール「Backlog」、ドローツール「Cacoo」など、コラボレーション型のWebサービスの企画と製品開発を行う。福岡在住。著作に「良いコードを書く技術（技術評論社）」"],image:"agata.jpg",twitter:"https://twitter.com/agata",facebook:"https://www.facebook.com/toshitaka.agata",github:"https://github.com/agata"},company:{name:"株式会社ヌーラボ",url:"http://nulab-inc.com/"}},{type:"sponsor",title:"チャットワークScala化プロジェクトの一年 (仮)",description:["チャットワークはサービスインから4年経過し、導入社数が69,000社を超え、毎週1,000万件弱のメッセージがやりとりされる大規模サービスへと成長しました。チャットワークはこれまでPHPで開発していましたが、１年前にScalaでコードとアーキテクチャを刷新する決断をしました。本セッションでは、なぜScalaを採用するに至ったのか？またその後どのようにしてScala化のプロジェクトを進めてきたのか、この一年間の歩みをご紹介します。また、PHPのエンジニアだった私が、どのようにScalaを学び、その中でつまづいたことやScalaを採用して良かったと思ったこと、辛いと感じたことも紹介したいと思います。"],speaker:{name:"安達 勇太",introduction:["1年半前にPHP&インフラのエンジニアとしてチャットワークに入社。1年前はScalaの知識&経験ゼロ。今は毎日Scalaを書きながら、面白いgifアニメを探している。"],image:"ada-u.png",twitter:"https://twitter.com/uadachi",facebook:"https://www.facebook.com/adachiyuta",github:"https://github.com/ada-u"},company:{name:"ChatWork株式会社",url:"http://www.chatwork.com/ja/"}},{type:"guest",title:"(タイトル未定)",description:["(調整中)"],speaker:{name:"瀬良 和弘",introduction:["@seratch","ScalikeJDBC、Skinny Framework プロジェクトリード。Scalatra、json4s、Scalate メンテナ。","エムスリー株式会社で医療系 Web サービスの開発・運用全般に従事。"],image:"seratch.jpeg",twitter:"https://twitter.com/seratch_ja",twitter_en:"https://twitter.com/seratch",facebook:"https://www.facebook.com/seratch",github:"https://github.com/seratch"}},{type:"public",title:"flyway-play / Easy Database Migration for Play",description:["Webアプリケーションの開発において、データベースのマイグレーションは一つの大きな関心事です。Playには標準でplay-evolutionsというモジュールが付属していますが、私はいつもそれとは別のFlywayというツールを利用しており、flyway-playというPlayモジュールも開発しています。flyway-playはPlay 2.4のリリースに合わせFlywayの公式Playモジュールとしてリリースしています。","本セッションではそのFlywayならびにflyway-playの紹介と、実際にPlayアプリ開発にどう活用できるかをお話しします。具体的には以下のような内容を想定しています。","<ul><li>開発動機と開発状況</li><li>Flywayの基本的な機能</li><li>flyway-playのユースケース</li><li>play-evolutionsとの比較</li><li>flyway-play以外でのFlywayの利用</li><li>プロダクション環境での利用</li><li>テストでの利用</li></ul>"],speaker:{name:"高橋 俊幸",introduction:["flyway-play, scala-csv, slick-joda-mapper, sbt-musical などを開発しています。"],image:"takahashi.jpeg",github:"https://github.com/tototoshi"}},{type:"public",title:"Scalaによるドメイン特化言語を使ったソフトウェアの動作解析",description:["Scala内部に実装されたドメイン特化言語を使い、ソフトウェアの動作解析を行うツール、ModbatとCSP_Eを紹介します。ModbatはAPIの状態遷移規則をドメイン特化言語で記述することで、テストシーケンスを生成するツールです。オンライン、オフラインでの検証に対応するほか、誤りが見つかった際に対応するユニットテストを生成する機能があります。また、CSP_Eは並行システムのログを解析し、並行プロセス言語CSPに基づく記法で書かれた仕様を満たしているか、検証するツールです。将来的にはfluentdへの統合を目指しています。加えて、Scalaでのドメイン特化言語の開発について、経験を共有します。"],speaker:{name:"山形 頼之",introduction:["国立研究開発法人　産業技術総合研究所　主任研究員",'研究テーマ: ソフトウェアの形式検証ほか<br><a href="https://staff.aist.go.jp/yoriyuki.yamagata/">https://staff.aist.go.jp/yoriyuki.yamagata/</a>',"関数型言語、特にOCamlに興味があり、各種ライブラリを開発してきました。最近はScalaにも興味を持っています。"],image:"yamagata.jpeg"}},{type:"guest",title:"sbt(すぶた)職人のススメ",description:["sbtのカスタムセッティングやカスタムタスクを書いてビルドを工夫したり、カスタムタスクをまとめてプラグイン化したり、プラグイン同時の依存関係を解決したりと、sbtの便利な機能を解説します。"],speaker:{name:"かとじゅん",introduction:['業界経験25年。最初のプログラミングは小学四年生から。FA系、オープン系、ウェブ系など様々の現場を経験。直近では大手ウェブ企業(動画配信系、ソーシャルゲーム系)で、Scalaやドメイン駆動設計を採用した、大規模な基盤系システムの開発に従事。業務以外では、Seasar2プロジェクトでコミッタを経験。過去に日経ソフトウエアで特集記事寄稿や、WEB+DB PRESS連載などを担当。Scala関連のOSS(<a href="https://github.com/sisioh">https://github.com/sisioh</a>など)も開発している。',"2014年7月にチャットワーク社に入社。テックリードとして、次世代ChatWorkシステムの開発をリードしている。"],image:"katojun.jpg",twitter:"https://twitter.com/j5ik2o",facebook:"https://www.facebook.com/j5ik2o",github:"https://github.com/j5ik2o"}},{type:"sponsor",title:"Refactoring with Functional Programing Style",description:["Javaで構築した一般的なWebアプリケーションをより保守性高く改善するために、Functional Styleをどのように利用するのか"],speaker:{name:"中村 学",introduction:["株式会社Tech to Value 代表取締役。","Scalaを中心にWeb開発やITシステムコンサルティングを行っています。"],image:"nakamura.jpg",twitter:"https://twitter.com/gakuzzzz",github:"https://github.com/gakuzzzz"},company:{name:"株式会社Tech to Value",url:"http://www.t2v.jp/"}},{type:"public",title:"finagleのすすめ",description:['finagle (<a href="http://github.com/twitter/finagle">http://github.com/twitter/finagle</a>) はtwitter社が開発している並列分散フレームワークである。',"今回社内の検索システムを作り直すにあたり数ある Scala のWebフレームワークの中から finagle を選択した。","finagle選択の理由、 finagle の特色である service と filter を組み合わせたAPI設計について説明し、運用してみてのハマったポイント、便利な機能を紹介する。日本でもっと finagle を使ったシステムが増えると幸いである。"],speaker:{name:"岩上 拓也",introduction:["東銀座で働くソフトウェアエンジニア。業務では Scala, C++, Ruby, elasticsearch など。前職は組み込みエンジニア。"],image:"iwag.jpg",twitter:"https://twitter.com/iwag_org",github:"https://github.com/iwag"}},{type:"public",title:"「Typesafe Reactive Platform」で作るリアクティブシステムとは",description:["最近Scala界隈でリアクティブ・システムという言葉をよく耳にするようになりました。","リアクティブマニフェストを見てみると、Responsive, Resilient, Elastic, Message Driven ...と概念的な言葉が並び、実体を掴むのが難しい。どうやって作ればリアクティブなシステムになるのか？Play、Akka、Scalaを 備えた「Typesafe Reactive Platform」を使えば、リアクティブ・システムはできるのか？リアクティブ・システムとして作るとどんなふうに幸せになれるのか？","そういった疑問への解の１つをデモを交えてお話します。 "],speaker:{name:"前出 祐吾",introduction:["TIS株式会社 生産革新本部 生産革新部 生産技術R&D室所属。","これまで社内向けWebアプリケーションフレームワークの開発やCIの活用を中心に様々な手段で開発の効率化を図るとともに社内向けの教育を 実施してきました。現在は、SIerが抱える課題をScalaやリアクティブプラットフォームで如何に解決するかをテーマに研究＆開発に従事しています。"],image:"maede.png",twitter:"https://twitter.com/yugolf",github:"https://github.com/yugolf",facebook:"https://www.facebook.com/yugo.maede"}},{type:"public",title:"はてなブックマーク in Scala",description:["はてなブックマークはサービス開始から10年が経ち、Perlで書かれたコードベースの肥大化・複雑化によるメンテナンスコスト増大という課題を抱えており、最近になっていちから作り直すプロジェクトがスタートしました。新しいはてなブックマークにはマイクロサービスアーキテクチャを採用し、コアアプリケーションサーバ部分はScalaで実装することになりました。","このセッションでは、開発中の新しいはてなブックマークでのドメイン駆動設計の取り組み、Scalaでの開発環境の工夫点などをご紹介したいとおもいます。"],speaker:{name:"伊奈 林太郎",introduction:["2008年のインターン・アルバイト時代からはてなブックマークの開発に従事。2013年に株式会社はてなに入社。大学では型理論を専門としていたこともあってスムーズにScalaに入門し4ヶ月が経過。"],image:"ina.png",github:"https://github.com/tarao"}},{type:"sponsor",title:"まだ再デプロイで消耗してるの？",description:["再デプロイを不要にして開発生産性を極限まで高めるJRebelやScalaデベロッパに人気のIDE、IntelliJ IDEA(とScalaプラグイン)の最新情報をデモを交えながらご紹介いたします。"],speaker:{name:"山本 裕介",introduction:["IntelliJ IDEA好きが興じて会社を作ってしまったScalaよりもJavaが得意なソフトウェアエンジニア。"],image:"yusuke.jpeg",twitter:"https://twitter.com/yusuke",github:"https://github.com/yusuke",facebook:"https://www.facebook.com/yusukey"},company:{name:"株式会社サムライズム",url:"http://samuraism.com/"}},{type:"LT",title:"【LT】Scala.jsはじめました！",description:[" Scala.jsをガチンコで使うために、sbtベースの構成を作ったり、npmベースの構成を作ったり、地雷を踏み抜きながら試行錯誤した話をします。"],speaker:{name:"Kouta Ozaki",introduction:["ChatWork株式会社のPHPエンジニア"],image:"ozaki.png",github:"https://github.com/k-kinzal",twitter:"https://twitter.com/k_kinzal"}},{type:"LT",title:"【LT】現場で使えるSkinny Framework + Gradle",description:["Scalaのwebアプリケーション開発はPlay Framework + sbtという選択肢だけではありません。サービス開発においてSkinny Framework + Gradleを採用した事例について簡単に紹介します。"],speaker:{name:"高橋 治",introduction:["Furyu株式会社に所属。ソフトウェアエンジニアとしては4年目。Scala歴は2年半ほど。"],image:"zerosum.jpeg",twitter:"https://twitter.com/zerosum_"}},{type:"LT",title:"【LT】> 突然のScalaプロジェクト < ",description:["ほんの些細なきっかけで突然Scalaプロジェクトに参加することになった。しかし、Scalaなんて3行ぐらいしか書いたことがない。そんな私がプロジェクトに参加するまで他の仕事をしながら3週間してこと、3ヶ月間プロジェクトに参加して感じたことを5分ぐらいで気楽にお話をしたいと思います。Scala書いたことがないけど、Scalaに挑戦してみたい人の参考になれば幸いです。"],speaker:{name:"火村 智彦",introduction:["広島在中のふつうのプログラマ。「Hiroshima.rb」とか「LT駆動開発」といった勉強会の主催をしています。Scalaはさっぱりわからない。ちなみにJavaは業務で書いたことがない。 "],image:"eielh.jpg",twitter:"https://twitter.com/eielh",github:"https://github.com/eiel",facebook:"https://www.facebook.com/eielh"}}],SessionsViewModel=function(t){var a=this;a.selected=ko.observable(t[0]),a.showDetail=function(t){a.selected(t)}};ko.applyBindings(new SessionsViewModel(sessions));