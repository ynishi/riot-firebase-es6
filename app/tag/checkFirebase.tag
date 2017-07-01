<checkFirebase>
<div id="message">
<h2>Welcome</h2>
<h1>Firebase Hosting Setup Complete</h1>
<p>You're seeing this because you've successfully setup Firebase Hosting. Now it's time to go build something extraordinary!</p>
<a target="_blank" href="https://firebase.google.com/docs/hosting/">Open Hosting Documentation</a>
<p id="load">
Firebase SDK load check: { result }
</p>
</div>
<style media="screen">
  #message { background: white; max-width: 360px; margin: 100px auto 16px; padding: 32px 24px; border-radius: 3px; }
  #message h2 { color: #ffa100; font-weight: bold; font-size: 16px; margin: 0 0 8px; }
  #message h1 { font-size: 22px; font-weight: 300; color: rgba(0,0,0,0.6); margin: 0 0 16px;}
  #message p { line-height: 140%; margin: 16px 0 24px; font-size: 14px; }
  #message a { display: block; text-align: center; background: #039be5; text-transform: uppercase; text-decoration: none; color: white; padding: 16px; border-radius: 4px; }
  #message, #message a { box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); }
  #load { color: rgba(0,0,0,0.4); text-align: center; font-size: 13px; }
  @media (max-width: 600px) {
    body, #message { margin-top: 0; background: white; box-shadow: none; }
    body { border-top: 16px solid #ffa100; }
  }
</style>
<script>
import * as firebase from 'firebase'

{
  try {
    var features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof firebase[feature] === 'function');
    this.result = `Firebase SDK loaded with ${features}`;
  } catch (e) {
    console.error(e);
    this.result = 'Error loading the Firebase SDK, check the console.';
  }
}
</script>
</checkFirebase>
