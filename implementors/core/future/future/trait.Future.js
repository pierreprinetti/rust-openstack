(function() {var implementors = {};
implementors["futures_channel"] = [{"text":"impl&lt;'_, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"futures_channel/oneshot/struct.Cancellation.html\" title=\"struct futures_channel::oneshot::Cancellation\">Cancellation</a>&lt;'_, T&gt;","synthetic":false,"types":["futures_channel::oneshot::Cancellation"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"futures_channel/oneshot/struct.Receiver.html\" title=\"struct futures_channel::oneshot::Receiver\">Receiver</a>&lt;T&gt;","synthetic":false,"types":["futures_channel::oneshot::Receiver"]}];
implementors["futures_task"] = [{"text":"impl&lt;'_, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"futures_task/struct.LocalFutureObj.html\" title=\"struct futures_task::LocalFutureObj\">LocalFutureObj</a>&lt;'_, T&gt;","synthetic":false,"types":["futures_task::future_obj::LocalFutureObj"]},{"text":"impl&lt;'_, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"futures_task/struct.FutureObj.html\" title=\"struct futures_task::FutureObj\">FutureObj</a>&lt;'_, T&gt;","synthetic":false,"types":["futures_task::future_obj::FutureObj"]}];
implementors["h2"] = [{"text":"impl&lt;B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"h2/client/struct.ReadySendRequest.html\" title=\"struct h2::client::ReadySendRequest\">ReadySendRequest</a>&lt;B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"bytes/buf/buf_impl/trait.Buf.html\" title=\"trait bytes::buf::buf_impl::Buf\">Buf</a> + 'static,&nbsp;</span>","synthetic":false,"types":["h2::client::ReadySendRequest"]},{"text":"impl&lt;T, B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"h2/client/struct.Connection.html\" title=\"struct h2::client::Connection\">Connection</a>&lt;T, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"bytes/buf/buf_impl/trait.Buf.html\" title=\"trait bytes::buf::buf_impl::Buf\">Buf</a> + 'static,&nbsp;</span>","synthetic":false,"types":["h2::client::Connection"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"h2/client/struct.ResponseFuture.html\" title=\"struct h2::client::ResponseFuture\">ResponseFuture</a>","synthetic":false,"types":["h2::client::ResponseFuture"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"h2/client/struct.PushedResponseFuture.html\" title=\"struct h2::client::PushedResponseFuture\">PushedResponseFuture</a>","synthetic":false,"types":["h2::client::PushedResponseFuture"]},{"text":"impl&lt;T, B:&nbsp;<a class=\"trait\" href=\"bytes/buf/buf_impl/trait.Buf.html\" title=\"trait bytes::buf::buf_impl::Buf\">Buf</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"h2/server/struct.Handshake.html\" title=\"struct h2::server::Handshake\">Handshake</a>&lt;T, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"bytes/buf/buf_impl/trait.Buf.html\" title=\"trait bytes::buf::buf_impl::Buf\">Buf</a> + 'static,&nbsp;</span>","synthetic":false,"types":["h2::server::Handshake"]}];
implementors["http_body"] = [{"text":"impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"http_body/trait.Body.html\" title=\"trait http_body::Body\">Body</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"http_body/struct.Data.html\" title=\"struct http_body::Data\">Data</a>&lt;'a, T&gt;","synthetic":false,"types":["http_body::next::Data"]},{"text":"impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"http_body/trait.Body.html\" title=\"trait http_body::Body\">Body</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"http_body/struct.Trailers.html\" title=\"struct http_body::Trailers\">Trailers</a>&lt;'a, T&gt;","synthetic":false,"types":["http_body::next::Trailers"]}];
implementors["hyper"] = [{"text":"impl&lt;T, B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"hyper/client/conn/struct.Connection.html\" title=\"struct hyper::client::conn::Connection\">Connection</a>&lt;T, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Payload + 'static,&nbsp;</span>","synthetic":false,"types":["hyper::client::conn::Connection"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"hyper/client/conn/struct.ResponseFuture.html\" title=\"struct hyper::client::conn::ResponseFuture\">ResponseFuture</a>","synthetic":false,"types":["hyper::client::conn::ResponseFuture"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"hyper/client/connect/dns/struct.GaiFuture.html\" title=\"struct hyper::client::connect::dns::GaiFuture\">GaiFuture</a>","synthetic":false,"types":["hyper::client::connect::dns::GaiFuture"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"hyper/client/struct.ResponseFuture.html\" title=\"struct hyper::client::ResponseFuture\">ResponseFuture</a>","synthetic":false,"types":["hyper::client::ResponseFuture"]},{"text":"impl&lt;I, B, S, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"hyper/server/conn/struct.Connection.html\" title=\"struct hyper::server::conn::Connection\">Connection</a>&lt;I, S, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: HttpService&lt;<a class=\"struct\" href=\"hyper/struct.Body.html\" title=\"struct hyper::Body\">Body</a>, ResBody = B&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::Error: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">StdError</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Payload + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: H2Exec&lt;S::Future, B&gt;,&nbsp;</span>","synthetic":false,"types":["hyper::server::conn::Connection"]},{"text":"impl&lt;I, F, S, FE, E, B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"hyper/server/conn/struct.Connecting.html\" title=\"struct hyper::server::conn::Connecting\">Connecting</a>&lt;I, F, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;S, FE&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: HttpService&lt;<a class=\"struct\" href=\"hyper/struct.Body.html\" title=\"struct hyper::Body\">Body</a>, ResBody = B&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Payload,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: H2Exec&lt;S::Future, B&gt;,&nbsp;</span>","synthetic":false,"types":["hyper::server::conn::Connecting"]},{"text":"impl&lt;I, IO, IE, S, B, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"hyper/server/struct.Server.html\" title=\"struct hyper::server::Server\">Server</a>&lt;I, S, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"hyper/server/accept/trait.Accept.html\" title=\"trait hyper::server::accept::Accept\">Accept</a>&lt;Conn = IO, Error = IE&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;IE: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">StdError</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;IO: <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: MakeServiceRef&lt;IO, <a class=\"struct\" href=\"hyper/struct.Body.html\" title=\"struct hyper::Body\">Body</a>, ResBody = B&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::Error: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">StdError</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Payload,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: H2Exec&lt;&lt;S::Service as HttpService&lt;<a class=\"struct\" href=\"hyper/struct.Body.html\" title=\"struct hyper::Body\">Body</a>&gt;&gt;::Future, B&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: NewSvcExec&lt;IO, S::Future, S::Service, E, NoopWatcher&gt;,&nbsp;</span>","synthetic":false,"types":["hyper::server::Server"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"hyper/upgrade/struct.OnUpgrade.html\" title=\"struct hyper::upgrade::OnUpgrade\">OnUpgrade</a>","synthetic":false,"types":["hyper::upgrade::OnUpgrade"]}];
implementors["hyper_tls"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"hyper_tls/struct.HttpsConnecting.html\" title=\"struct hyper_tls::HttpsConnecting\">HttpsConnecting</a>&lt;T&gt;","synthetic":false,"types":["hyper_tls::client::HttpsConnecting"]}];
implementors["tokio"] = [{"text":"impl&lt;'_, S:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio/io/struct.Seek.html\" title=\"struct tokio::io::Seek\">Seek</a>&lt;'_, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"tokio/io/trait.AsyncSeek.html\" title=\"trait tokio::io::AsyncSeek\">AsyncSeek</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":false,"types":["tokio::io::seek::Seek"]},{"text":"impl&lt;'_, R:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, W:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio/io/struct.Copy.html\" title=\"struct tokio::io::Copy\">Copy</a>&lt;'_, R, W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"tokio/io/trait.AsyncRead.html\" title=\"trait tokio::io::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;W: <a class=\"trait\" href=\"tokio/io/trait.AsyncWrite.html\" title=\"trait tokio::io::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":false,"types":["tokio::io::util::copy::Copy"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio/task/struct.JoinHandle.html\" title=\"struct tokio::task::JoinHandle\">JoinHandle</a>&lt;T&gt;","synthetic":false,"types":["tokio::runtime::task::join::JoinHandle"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio/sync/oneshot/struct.Receiver.html\" title=\"struct tokio::sync::oneshot::Receiver\">Receiver</a>&lt;T&gt;","synthetic":false,"types":["tokio::sync::oneshot::Receiver"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio/time/struct.Delay.html\" title=\"struct tokio::time::Delay\">Delay</a>","synthetic":false,"types":["tokio::time::delay::Delay"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"tokio/time/struct.Timeout.html\" title=\"struct tokio::time::Timeout\">Timeout</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>,&nbsp;</span>","synthetic":false,"types":["tokio::time::timeout::Timeout"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()